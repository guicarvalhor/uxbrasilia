import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="footer" role="contentinfo">
      <div className="container footer__inner">
        <a
          className="brand brand--footer"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Voltar ao topo"
        >
          <img src="/assets/logo-ux.svg" alt="UXBrasília" />
          <p id="footer-text">
            A comunidade onde o design é coletivo <br /> e a experiência é compartilhada!
          </p>
        </a>

        <div className="footer__cols">
          <div className="footer__col">
            <h4>Comunidade</h4>
            <ul>
              <li>
                <a href="/" onClick={(e) => handleNav(e, '/')}>
                  Página inicial
                </a>
              </li>
              <li>
                <a href="/voluntariado" onClick={(e) => handleNav(e, '/voluntariado')}>
                  Voluntariado
                </a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => handleNav(e, '/blog')}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/parceiros" onClick={(e) => handleNav(e, '/parceiros')}>
                  Parceiros
                </a>
              </li>
              <li>
                <a href="/contato" onClick={(e) => handleNav(e, '/contato')}>
                  Contatos
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Nossas redes</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/uxbrasilia" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/uxbrasilia" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@UXBrasilia" target="_blank" rel="noopener noreferrer">
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://discord.gg/PQqQsty3V" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/D6ycyYpQCWFDedC5rY6IYt" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__copy">
        <div className="container">
          © 2026 UXBrasília. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
