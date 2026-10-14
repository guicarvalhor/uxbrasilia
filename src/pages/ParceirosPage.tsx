import React from 'react';

interface ParceirosPageProps {
  onNavigate: (path: string) => void;
}

export const ParceirosPage: React.FC<ParceirosPageProps> = ({ onNavigate }) => {
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

        <div className="container hero__content-pink">
          <h1 className="hero__title">Nossos Parceiros</h1>
          <p className="hero__desc">
            Conheça as empresas e instituições que acreditam e apoiam o fortalecimento da comunidade de UX Brasília.
          </p>
        </div>
      </section>

      {/* Quem nos apoia */}
      <section className="supporters-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 className="section__title text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Quem nos apoia
          </h2>
          <div
            className="supporter-logos"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://www.fiap.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="supporter-logo-item"
              title="FIAP"
              style={{
                background: '#fff',
                padding: '20px 32px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid #e5e7eb',
                display: 'inline-block',
              }}
            >
              <img src="/assets/alura+fiap-cor-horiz.svg" alt="Logo da FIAP" style={{ height: '44px' }} />
            </a>
            <a
              href="https://www.thestarter.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="supporter-logo-item"
              title="The Starter"
              style={{
                background: '#fff',
                padding: '20px 32px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid #e5e7eb',
                display: 'inline-block',
              }}
            >
              <img src="/assets/thestarter.svg" alt="Logo da The Starter" style={{ height: '44px' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios Exclusivos */}
      <section className="partners-section" style={{ padding: '40px 0 80px', backgroundColor: 'var(--offwhite)' }}>
        <div className="container">
          <h2 className="section__title text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Benefícios Exclusivos
          </h2>

          <article
            className="partner-card"
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <img src="/assets/alura+fiap-cor-horiz.svg" alt="Logo da FIAP" style={{ height: '40px' }} />
            </div>
            <div className="partner-card__content">
              <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.6rem', marginBottom: '12px' }}>
                ALURA + FIAP
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px' }}>
                Uma das mais renomadas faculdades de tecnologia do Brasil, a FIAP oferece descontos exclusivos para a comunidade UX Brasília em seus cursos de graduação e pós-graduação.
              </p>
              <div
                className="partner-card__benefits"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                }}
              >
                <div
                  className="benefit-item"
                  style={{
                    background: '#f9fafb',
                    padding: '24px',
                    borderRadius: '16px',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '8px', color: 'var(--blue)' }}>
                    15% de desconto na Alura
                  </strong>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                    Acesse a maior plataforma de cursos de tecnologia do Brasil com um desconto especial.
                  </p>
                  <a
                    href="https://www.alura.com.br/promocao/comunidade15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                    style={{ display: 'inline-block' }}
                  >
                    Acessar desconto Alura
                  </a>
                </div>

                <div
                  className="benefit-item"
                  style={{
                    background: '#f9fafb',
                    padding: '24px',
                    borderRadius: '16px',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '8px', color: 'var(--pink)' }}>
                    Até 20% de desconto na FIAP
                  </strong>
                  <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                    Garanta <strong>20% off</strong> em MBA, Pós Tech e Graduação Online, ou <strong>10% off</strong> para Graduação Online via formulário.
                  </p>
                  <a
                    href="https://forms.office.com/pages/responsepage.aspx?id=4r_bEbiJSUW-EM7DZOWVUQxiN5DPP4VImX7i5bKJKoxUNEwyTEVMVTIzMFhFUEJCM0E1R1o3MTZTWS4u&route=shorturl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                    style={{ display: 'inline-block' }}
                  >
                    Preencher formulário FIAP
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Seja nosso parceiro */}
      <section className="join-partners-section" style={{ padding: '80px 0', backgroundColor: 'var(--blue)' }}>
        <div className="container" style={{ textAlign: 'center', color: '#fff' }}>
          <h2 className="section__title section__title--light" style={{ color: '#fff', marginBottom: '16px' }}>
            Seja nosso parceiro!
          </h2>
          <p
            className="section__subtitle section__subtitle--light"
            style={{ maxWidth: '750px', margin: '0 auto 40px auto', opacity: 0.9, lineHeight: 1.7 }}
          >
            Associe sua marca a uma comunidade vibrante e em crescimento. Apoiando o UX Brasília, você se conecta com profissionais, estudantes e entusiastas da área de tecnologia e design no coração do Brasil.
          </p>

          <div
            className="community-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              maxWidth: '900px',
              margin: '0 auto 40px auto',
            }}
          >
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
              <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800 }}>+400</span>
              <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>Membros na Comunidade</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
              <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800 }}>450</span>
              <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>Seguidores no Instagram</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
              <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800 }}>10</span>
              <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>Eventos Realizados</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '24px', borderRadius: '16px' }}>
              <span style={{ display: 'block', fontSize: '2.5rem', fontWeight: 800 }}>+600</span>
              <span style={{ fontSize: '0.95rem', opacity: 0.9 }}>Participantes nos Eventos</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onNavigate('/contato')}
            style={{ background: '#fff', color: 'var(--blue)', fontWeight: 700 }}
          >
            Falar sobre parceria
          </button>
        </div>
      </section>
    </main>
  );
};
