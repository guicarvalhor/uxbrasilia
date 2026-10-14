import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyStaticFoldersPlugin(): Plugin {
  return {
    name: 'copy-static-folders',
    closeBundle() {
      const foldersToCopy = ['assets', 'fonts', 'data', 'blog'];
      const outDir = path.resolve(__dirname, 'dist');
      
      foldersToCopy.forEach((folder) => {
        const srcDir = path.resolve(__dirname, folder);
        const destDir = path.resolve(outDir, folder);
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true });
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), copyStaticFoldersPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: false
  }
});
