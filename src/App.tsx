import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CatalogoPage } from './pages/CatalogoPage';
import { ProdutoDetailPage } from './pages/ProdutoDetailPage';
import { ParceirosPage } from './pages/ParceirosPage';
import { ContatoPage } from './pages/ContatoPage';
import { DecolaPage } from './pages/DecolaPage';
import { VoluntariadoPage } from './pages/VoluntariadoPage';
import { ObrigadoPage } from './pages/ObrigadoPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname + window.location.search;
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.search);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Parse path and search params
  const [pathname, search] = currentPath.split('?');
  const searchParams = new URLSearchParams(search || '');
  const idParam = searchParams.get('id');

  const renderCurrentPage = () => {
    // Normalization
    const cleanPath = pathname.replace(/\/$/, '') || '/';

    if (cleanPath === '/' || cleanPath === '/index.html') {
      return <HomePage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/vagas' || cleanPath === '/vagas.html' || cleanPath === '/voluntariado' || cleanPath === '/voluntariado.html') {
      return <VoluntariadoPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/blog' || cleanPath === '/blog.html') {
      if (idParam) {
        return <BlogPostPage postId={idParam} onNavigate={handleNavigate} />;
      }
      return <BlogPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/blog/post' || cleanPath === '/blog/post.html') {
      return <BlogPostPage postId={idParam || 'post-3'} onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/catalogo' || cleanPath === '/catalogo.html') {
      return <CatalogoPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/loja/produto' || cleanPath === '/loja/produto.html' || cleanPath === '/loja/camiseta.html') {
      return <ProdutoDetailPage productId={idParam || 'camiseta-cafe-uxui'} onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/parceiros' || cleanPath === '/parceiros.html') {
      return <ParceirosPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/contato' || cleanPath === '/contato.html') {
      return <ContatoPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/decola' || cleanPath === '/decola.html') {
      return <DecolaPage onNavigate={handleNavigate} />;
    }

    if (cleanPath === '/obrigado' || cleanPath === '/obrigado.html') {
      return <ObrigadoPage onNavigate={handleNavigate} />;
    }

    // Default fallback to HomePage
    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="app-root">
      <Header currentPath={pathname} onNavigate={handleNavigate} />
      <div className="page-content">{renderCurrentPage()}</div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
export default App;
