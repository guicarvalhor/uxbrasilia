import React, { useState, useEffect } from 'react';

interface ObrigadoPageProps {
  onNavigate: (path: string) => void;
}

export const ObrigadoPage: React.FC<ObrigadoPageProps> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="thanks-shell" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
      {isLoading ? (
        <div className="loading-state" aria-live="polite" style={{ textAlign: 'center' }}>
          <div
            className="loader"
            style={{
              width: '64px',
              height: '64px',
              margin: '0 auto 20px',
              border: '6px solid rgba(56, 178, 111, 0.15)',
              borderTopColor: 'var(--green-600)',
              borderRadius: '50%',
              animation: 'spin 0.9s linear infinite',
            }}
          />
          <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.8rem', margin: '0 0 8px' }}>
            Enviando sua candidatura...
          </h2>
          <p style={{ color: 'var(--muted)', margin: 0 }}>Estamos validando os seus dados.</p>
        </div>
      ) : (
        <div
          className="thanks-layout"
          style={{
            maxWidth: '960px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/Ok-rafiki.png"
              alt="Ilustração de confirmação"
              style={{ width: '100%', maxWidth: '380px', filter: 'drop-shadow(0 18px 30px rgba(13,22,18,0.1))' }}
            />
          </div>

          <section
            className="thanks-card is-visible"
            style={{
              background: '#fff',
              border: '1px solid rgba(56, 178, 111, 0.18)',
              borderRadius: '28px',
              padding: '40px 32px',
              boxShadow: 'var(--shadow)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(56, 178, 111, 0.12)',
                color: 'var(--green-600)',
                borderRadius: '999px',
                padding: '8px 18px',
                fontWeight: 700,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '16px',
              }}
            >
              Formulário enviado
            </div>
            <h1
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                lineHeight: 1.1,
                margin: '0 0 16px',
              }}
            >
              Obrigado pela sua candidatura!
            </h1>
            <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: '28px' }}>
              Sua inscrição foi enviada com sucesso. A nossa equipe vai analisar seu interesse e entraremos em contato em breve.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate('/')}
              >
                Voltar para a página inicial
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => onNavigate('/voluntariado')}
              >
                Voltar para Voluntariado
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};
