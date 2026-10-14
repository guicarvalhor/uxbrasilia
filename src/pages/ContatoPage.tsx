import React, { useState } from 'react';

interface ContatoPageProps {
  onNavigate: (path: string) => void;
}

export const ContatoPage: React.FC<ContatoPageProps> = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    const submissionData = new FormData();
    submissionData.append('nome', formData.nome);
    submissionData.append('email', formData.email);
    submissionData.append('mensagem', formData.mensagem);

    try {
      const response = await fetch('https://formspree.io/f/mldweppa', {
        method: 'POST',
        body: submissionData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setIsSent(true);
      setFormData({ nome: '', email: '', mensagem: '' });
    } catch (err) {
      console.error(err);
      setErrorMsg('Não foi possível enviar a mensagem. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section id="hero-voluntariado" className="hero">
        <div className="hero__bg">
          <div className="rings rings--1"></div>
          <div className="rings rings--2"></div>
          <div className="rings rings--3"></div>
          <div className="rings rings--4"></div>
          <div className="rings rings--5"></div>
        </div>

        <div className="container hero__content">
          <h1 className="hero__title">Contato</h1>
          <p className="hero__desc">
            Para parcerias, sugestões ou dúvidas, preencha o formulário abaixo ou fale com a gente nas redes.
          </p>
        </div>
      </section>

      <section id="contato-redes" className="features" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="container">
          <h2 className="section__title" style={{ textAlign: 'center' }}>
            Conecte-se conosco
          </h2>
          <p
            className="section__subtitle"
            style={{ textAlign: 'center', maxWidth: '700px', margin: '-1.5rem auto 3rem auto' }}
          >
            Siga nossas redes para não perder nenhuma novidade e participe da comunidade.
          </p>

          <div className="social-highlight-grid" style={{ marginBottom: '60px' }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/uxbrasilia/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--instagram"
            >
              <div className="social-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="social-card__content">
                <h3>Instagram</h3>
                <p>@uxbrasilia</p>
              </div>
              <div className="social-card__action">
                <span>Seguir</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/uxbrasilia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--linkedin"
            >
              <div className="social-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="social-card__content">
                <h3>LinkedIn</h3>
                <p>UXBrasília</p>
              </div>
              <div className="social-card__action">
                <span>Conectar</span>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@UXBrasilia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--youtube"
            >
              <div className="social-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
              <div className="social-card__content">
                <h3>YouTube</h3>
                <p>Nosso Canal</p>
              </div>
              <div className="social-card__action">
                <span>Inscrever</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://chat.whatsapp.com/D6ycyYpQCWFDedC5rY6IYt"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--whatsapp"
            >
              <div className="social-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-1.23 4.19L20 20l-4.4-1.14A8.5 8.5 0 1 1 21 11.5z"></path>
                  <path d="M16.5 14.5c-.23-.12-1.38-.68-1.59-.76-.21-.08-.36-.12-.51.12-.15.23-.58.76-.71.91-.13.15-.26.17-.49.06-.23-.12-.96-.35-1.83-1.12-.68-.61-1.14-1.37-1.27-1.6-.13-.23-.02-.35.1-.47.1-.1.23-.26.35-.39.12-.13.16-.23.24-.39.08-.15.04-.29-.02-.41-.06-.12-.51-1.24-.7-1.7-.18-.44-.37-.38-.51-.38h-.43c-.15 0-.39.06-.6.29-.2.23-.77.75-.77 1.83s.79 2.11.9 2.26c.11.15 1.55 2.36 3.77 3.3 2.22.94 2.22.63 2.62.59.4-.04 1.3-.53 1.48-1.04.18-.51.18-.94.13-1.04-.05-.1-.2-.15-.43-.27z"></path>
                </svg>
              </div>
              <div className="social-card__content">
                <h3>WhatsApp</h3>
                <p>Entre no grupo da comunidade</p>
              </div>
              <div className="social-card__action">
                <span>Entrar</span>
              </div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/PQqQsty3V"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--discord"
            >
              <div className="social-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19.6 5.1c-1.3-.6-2.7-1.1-4.1-1.4-.2.3-.4.7-.6 1-1.9-.3-3.9-.3-5.8 0-.2-.3-.4-.7-.6-1-1.5.3-2.9.8-4.2 1.4A18.4 18.4 0 0 0 2.5 15.9a18.1 18.1 0 0 0 5.7 2.8c.5-.7 1-1.4 1.4-2.2-.8-.3-1.5-.7-2.2-1.2.2-.1.3-.2.5-.3A12.4 12.4 0 0 0 12 17c1.3 0 2.6-.2 3.8-.6.1.1.3.2.5.3-.7.5-1.4.9-2.2 1.2.4.8.9 1.5 1.4 2.2a18.1 18.1 0 0 0 5.7-2.8A18.4 18.4 0 0 0 19.6 5.1zM9.7 13.8c-.9 0-1.7-.8-1.7-1.8s.7-1.8 1.7-1.8c1 .1 1.7.9 1.7 1.8s-.7 1.8-1.7 1.8zm4.6 0c-.9 0-1.7-.8-1.7-1.8s.7-1.8 1.7-1.8c1 .1 1.7.9 1.7 1.8s-.7 1.8-1.7 1.8z"></path>
                </svg>
              </div>
              <div className="social-card__content">
                <h3>Discord</h3>
                <p>Faça parte do nosso espaço</p>
              </div>
              <div className="social-card__action">
                <span>Entrar</span>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="form-container" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 className="section__title" style={{ textAlign: 'center', marginBottom: '16px' }}>
              Ou nos envie uma mensagem
            </h2>
            <p
              className="section__subtitle"
              style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 32px auto' }}
            >
              Para parcerias, sugestões ou dúvidas, preencha o formulário abaixo.
            </p>

            {isSent ? (
              <div
                style={{
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '24px',
                  borderRadius: '16px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ margin: '0 0 8px' }}>Mensagem enviada com sucesso!</h3>
                <p style={{ margin: 0 }}>Obrigado por nos contatar. Responderemos em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form">
                {errorMsg && (
                  <div style={{ color: '#dc2626', marginBottom: '16px', fontSize: '0.9rem' }}>
                    {errorMsg}
                  </div>
                )}
                <div className="form__group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="nome" style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div className="form__group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>
                <div className="form__group" style={{ marginBottom: '24px' }}>
                  <label htmlFor="mensagem" style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={6}
                    required
                    placeholder="Escreva sua mensagem aqui..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn--primary"
                  style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Enviando mensagem...' : 'Enviar mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
