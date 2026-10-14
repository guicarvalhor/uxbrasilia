import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyStaticFoldersPlugin(): Plugin {
  return {
    name: 'copy-static-folders',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      const foldersToCopy = ['assets', 'fonts', 'data', 'blog', 'decola'];
      
      foldersToCopy.forEach((folder) => {
        const srcDir = path.resolve(__dirname, folder);
        const destDir = path.resolve(outDir, folder);
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true });
        }
      });

      // Copy CNAME file to dist for custom domain (GitHub Pages)
      const cnameSrc = path.resolve(__dirname, 'CNAME');
      const cnameDest = path.resolve(outDir, 'CNAME');
      if (fs.existsSync(cnameSrc)) {
        fs.copyFileSync(cnameSrc, cnameDest);
      }

      // Generate 404.html from index.html for SPA fallback on GitHub Pages
      const indexHtml = path.resolve(outDir, 'index.html');
      const notFoundHtml = path.resolve(outDir, '404.html');
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml);
      }
    }
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), copyStaticFoldersPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: false
  }
});
