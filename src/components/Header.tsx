import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Página inicial' },
    { href: '/voluntariado', label: 'Voluntariado' },
    { href: '/blog', label: 'Blog' },
    { href: '/parceiros', label: 'Parceiros' },
    { href: '/contato', label: 'Contatos' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    onNavigate(href);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/' || currentPath === '/index.html' || currentPath === '';
    }
    return currentPath === href || currentPath.startsWith(href + '?');
  };

  return (
    <header className={`nav ${isMenuOpen ? 'nav--open' : ''}`} id="top-nav" role="banner" aria-label="Navegação principal">
      <div className="container nav__inner">
        <a
          className="brand"
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          aria-label="UXBrasília — Página inicial"
        >
          <img src="/assets/logo-ux.svg" alt="Logo UX Brasília" />
        </a>

        <button
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="menu-links"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          <svg
            className="menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path className="close-lines" d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path className="hamburger-lines" d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav className="nav__links" id="menu-links" aria-label="Links do site">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                id={active ? 'active' : undefined}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
