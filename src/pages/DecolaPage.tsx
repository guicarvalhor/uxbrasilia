import React from 'react';

interface DecolaPageProps {
  onNavigate: (path: string) => void;
}

export const DecolaPage: React.FC<DecolaPageProps> = () => {
  const mentores = [
    { name: 'Guilherme Rodrigues', role: 'Coordenação UXBrasília', img: '/decola/assets/gui.png' },
    { name: 'Karynne Marinho', role: 'Logística e Parcerias', img: '/decola/assets/kary.png' },
    { name: 'Lucas Paixão', role: 'Product Design', img: '/decola/assets/lucas.png' },
    { name: 'Raianna Soares', role: 'UX/UI Designer', img: '/decola/assets/rai.png' },
    { name: 'Vanessa Lima', role: 'UX Research', img: '/decola/assets/van.png' },
    { name: 'Renato Silva', role: 'Design Ops', img: '/decola/assets/renato.png' },
    { name: 'Marcela Duarte', role: 'UX Writer', img: '/decola/assets/marcela.png' },
    { name: 'Thiago Martins', role: 'Product Strategy', img: '/decola/assets/thiago.png' },
    { name: 'Laila Costa', role: 'Design System', img: '/decola/assets/lai.png' },
    { name: 'Carlos Eduardo', role: 'Service Design', img: '/decola/assets/carlos.png' },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero yellow-700" id="hero-voluntariado">
        <div className="hero__bg">
          <div className="rings rings--1"></div>
          <div className="rings rings--2"></div>
          <div className="rings rings--3"></div>
          <div className="rings rings--4"></div>
          <div className="rings rings--5"></div>
        </div>

        <div className="container hero__content-pink">
          <h1 className="hero__title">Decola UXBrasília</h1>
          <p className="hero__desc">
            Programa de mentoria <strong>gratuito</strong> para impulsionar sua carreira em UX/UI por e para a comunidade UX Brasília.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="mentoria-section" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 className="section__title text-center" style={{ textAlign: 'center', marginBottom: '24px' }}>
            Sobre o Programa
          </h2>

          <div
            className="mentoria-about"
            style={{
              maxWidth: '800px',
              margin: '0 auto 60px auto',
              fontSize: '1.15rem',
              lineHeight: 1.8,
              textAlign: 'center',
              color: 'var(--muted)',
            }}
          >
            <p>
              O Decola UXBrasília é um programa de mentoria <strong>100% gratuito</strong>, com duração de <strong>2 meses</strong>, que conecta participantes a mentores parceiros da comunidade.
            </p>
            <p>
              Os participantes têm acesso à agenda dos mentores durante o período do programa. Sugerimos <strong>três a quatro encontros</strong> com intervalo de <strong>15 a 20 dias</strong>, com flexibilidade para mentor e participante ajustarem suas dinâmicas.
            </p>
          </div>

          {/* Steps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              marginBottom: '80px',
            }}
          >
            <div style={{ background: '#f9fafb', padding: '28px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--yellow-700)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                1
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem' }}>Inscrição</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem' }}>
                Cadastre-se para participar das novas edições do programa de mentoria.
              </p>
            </div>

            <div style={{ background: '#f9fafb', padding: '28px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--yellow-700)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                2
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem' }}>Participe da live</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem' }}>
                Acompanhe o encontro inicial de alinhamento e garanta o acesso às agendas dos mentores.
              </p>
            </div>

            <div style={{ background: '#f9fafb', padding: '28px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--yellow-700)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                3
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem' }}>Agende encontros</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem' }}>
                3-4 sessões personalizadas com intervalo de 15 a 20 dias para foco em portfólio, transição ou desafios reais.
              </p>
            </div>

            <div style={{ background: '#f9fafb', padding: '28px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--yellow-700)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                4
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem' }}>Evolução contínua</h3>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.95rem' }}>
                Apoio e feedback estruturados ao longo da jornada para destravar seus próximos passos de carreira.
              </p>
            </div>
          </div>

          {/* Mentores */}
          <h2 className="section__title text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Pessoas Mentoras do Programa
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
            }}
          >
            {mentores.map((m, idx) => (
              <figure
                key={idx}
                className="team-card"
                style={{ textAlign: 'center', padding: '20px', borderRadius: '20px', background: '#fff' }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 16px auto',
                  }}
                  onError={(e) => {
                    // Fallback to placeholder if mentor image path differs
                    (e.target as HTMLImageElement).src = '/assets/perfis/gui.jpg';
                  }}
                />
                <figcaption>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 4px' }}>{m.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>{m.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
