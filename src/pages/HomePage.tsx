import React, { useState, useEffect, useRef } from 'react';
import { WelcomeModal } from '../components/WelcomeModal';
import { destaquesData } from '../data/destaques';
import { eventsData, EventItem } from '../data/events';
import { teamData } from '../data/team';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<number | null>(null);

  const totalSlides = destaquesData.length;

  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, totalSlides]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDestaqueClick = (e: React.MouseEvent, link: string) => {
    if (link.startsWith('http')) {
      // Allow default external navigation
      return;
    }
    if (link.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    e.preventDefault();
    onNavigate(link);
  };

  const years = Object.keys(eventsData).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <WelcomeModal onNavigate={onNavigate} />

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__bg">
          <div className="rings rings--1"></div>
          <div className="rings rings--2"></div>
          <div className="rings rings--3"></div>
          <div className="rings rings--4"></div>
          <div className="rings rings--5"></div>
        </div>

        <div className="floating-label" style={{ ['--color' as any]: '#ffcc00', top: '30%', left: '10%' }}>
          Lucas
        </div>
        <div className="floating-label floating-label1" style={{ ['--color' as any]: '#e94092', top: '30%', left: '80%' }}>
          Joana
        </div>
        <div className="floating-label floating-label2" style={{ ['--color' as any]: '#2f80ff', top: '60%', left: '70%' }}>
          Roberta
        </div>
        <div className="floating-label floating-label3" style={{ ['--color' as any]: '#1c8045', top: '70%', left: '20%' }}>
          Carlos
        </div>

        <div className="container hero__content">
          <h1 className="hero__title">
            A comunidade onde o design é <span className="nowrap">coletivo</span> e a experiência{' '}
            <span className="nowrap">é compartilhada!</span>
          </h1>
          <p className="hero__desc">
            Somos a UXBrasília, um espaço aberto e colaborativo para quem estuda, trabalha ou é apaixonado por criar melhores produtos e serviços.
          </p>

          <div className="hero__cta">
            <a
              href="https://chat.whatsapp.com/D6ycyYpQCWFDedC5rY6IYt?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Faça parte da comunidade
            </a>
          </div>
        </div>
      </section>

      {/* DESTAQUES / CAROUSEL */}
      <section className="destaques container" style={{ marginTop: '40px' }}>
        <h2 className="section__title">Destaques</h2>
        <div
          className="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botões de navegação */}
          <div className="carousel-nav">
            <button
              className="carousel-nav__btn carousel-nav__prev"
              aria-label="Slide anterior"
              onClick={handlePrevSlide}
              type="button"
            >
              ←
            </button>
            <button
              className="carousel-nav__btn carousel-nav__next"
              aria-label="Próximo slide"
              onClick={handleNextSlide}
              type="button"
            >
              →
            </button>
          </div>

          <div
            className="slides"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {destaquesData.map((item, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    href={item.link}
                    onClick={(e) => handleDestaqueClick(e, item.link)}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="btn btn--ghost"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="indicators">
            {destaquesData.map((_, index) => (
              <div
                key={index}
                className={`progress-bar ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / PROPÓSITO / VALORES */}
      <section id="sobre" className="features">
        <div className="container">
          <h2 className="section__title">
            Apaixonados por design, <br /> movidos por pessoas.
          </h2>

          <div className="features__grid">
            <article className="feature-card">
              <div className="feature-card__head">
                <span className="feature-card__num">01</span>
                <span className="feature-card__arrow">↗</span>
              </div>
              <h3 className="feature-card__title">Sobre nós</h3>
              <p className="feature-card__text">
                O UX Brasília nasceu da vontade de criar um ponto de encontro para a cena de tecnologia e design no Distrito Federal.
                Mais do que um grupo, somos uma comunidade que acredita no poder da colaboração para o crescimento profissional e pessoal de cada um.
              </p>
            </article>

            <article className="feature-card feature-card--highlight">
              <div className="feature-card__head">
                <span className="feature-card__num">02</span>
                <span className="feature-card__arrow">↗</span>
              </div>
              <h3 className="feature-card__title">Nosso propósito</h3>
              <p className="feature-card__text">
                Construir um espaço de conexão e apoio entre designers, promovendo aprendizado, desenvolvimento coletivo e
                impacto social, com base na empatia, pertencimento e objetivos compartilhados.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-card__head">
                <span className="feature-card__num">03</span>
                <span className="feature-card__arrow">↗</span>
              </div>
              <h3 className="feature-card__title">Valores</h3>
              <p className="feature-card__text">
                <strong>Colaboração acima de tudo:</strong> acreditamos que juntos vamos mais longe.<br />
                <strong>Aprendizado contínuo:</strong> estamos sempre abertos a novas ideias e perspectivas.<br />
                <strong>Inclusão e diversidade:</strong> criamos um espaço seguro e acolhedor para todo mundo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TIME */}
      <section className="team" aria-labelledby="team-title">
        <div className="team__bg"></div>
        <div className="container">
          <h2 id="team-title" className="section__title section__title--light">
            Quem faz acontecer
          </h2>
          <p className="team__subtitle">
            Pessoas voluntárias, coordenação e lideranças que impulsionam as frentes, programas e iniciativas da comunidade UX Brasília.
          </p>

         

          {/* Coordenação Geral & Heads */}
          <div className="team__group-header">
            <h3 className="team__group-title">Coordenação Geral & Heads</h3>
            <div className="team__group-line"></div>
          </div>
          <div className="team__grid">
            {teamData
              .filter((m) => m.group === 'coordenacao')
              .map((member) => (
                <figure className="team-card" key={member.id}>
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (member.fallbackImg && target.src !== member.fallbackImg) {
                        target.src = member.fallbackImg;
                      } else {
                        target.src = '/assets/perfis/gui.jpg';
                      }
                    }}
                  />
                  <figcaption>
                    <span className={`team-badge team-badge--${member.badgeType}`}>
                      {member.badgeLabel}
                    </span>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </figcaption>
                </figure>
              ))}
          </div>

          {/* Leads das Frentes */}
          <div className="team__group-header" style={{ marginTop: '48px' }}>
            <h3 className="team__group-title">Leads de Frentes e Programas</h3>
            <div className="team__group-line"></div>
          </div>
          <div className="team__grid">
            {teamData
              .filter((m) => m.group === 'leads')
              .map((member) => (
                <figure className="team-card" key={member.id}>
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (member.fallbackImg && target.src !== member.fallbackImg) {
                        target.src = member.fallbackImg;
                      } else {
                        target.src = '/assets/perfis/gui.jpg';
                      }
                    }}
                  />
                  <figcaption>
                    <span className={`team-badge team-badge--${member.badgeType}`}>
                      {member.badgeLabel}
                    </span>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </figcaption>
                </figure>
              ))}
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="events" aria-labelledby="events-title">
        <div className="container">
          <h2 id="events-title" className="section__title">
            Nossos eventos
          </h2>

          <div className="events__grid">
            {years.map((year) => (
              <React.Fragment key={year}>
                <div className="events__year-title">{year}</div>
                {eventsData[year].map((event: EventItem, idx: number) => {
                  let buttonLabel = 'Saiba mais';
                  if (event.linkType === 'video') buttonLabel = 'Ver vídeo';
                  else if (event.linkType === 'photos') buttonLabel = 'Ver fotos';
                  else if (event.linkType === 'tickets') buttonLabel = 'Ver ingressos';

                  return (
                    <article key={idx} className={`event-card event-card--${event.color}`}>
                      <div className="event-card__meta">
                        <span>{event.date}</span>
                        <span className="badge">
                          {event.status === 'realizado' ? 'Já realizado' : 'Em breve'}
                        </span>
                      </div>
                      <h3 className="event-card__title">{event.title}</h3>
                      <p className="event-card__desc">
                        {event.local}
                        {event.hora ? ` | ${event.hora}` : ''}
                      </p>
                      {event.linkType && event.linkUrl && (
                        <a
                          href={event.linkUrl}
                          target={event.linkUrl.startsWith('http') ? '_blank' : undefined}
                          rel={event.linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={(e) => {
                            if (!event.linkUrl!.startsWith('http')) {
                              e.preventDefault();
                              onNavigate(event.linkUrl!);
                            }
                          }}
                          className="btn btn--small"
                        >
                          {buttonLabel}
                        </a>
                      )}
                    </article>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WHATSAPP */}
      <section id="cta-whatsapp" className="cta-whatsapp">
        <div
          className="floating-label floating-label1"
          style={{ ['--color' as any]: 'var(--pink, #d83b96)', top: '20%', left: '12%' }}
        >
          Vagas 💼
        </div>
        <div
          className="floating-label floating-label3"
          style={{ ['--color' as any]: 'var(--yellow, #f6c446)', top: '25%', left: '82%' }}
        >
          Portfólio 🎨
        </div>
        <div
          className="floating-label floating-label2"
          style={{ ['--color' as any]: 'var(--pink, #d83b96)', top: '65%', left: '75%' }}
        >
          Networking 🚀
        </div>
        <div
          className="floating-label"
          style={{ ['--color' as any]: 'var(--blue, #2e67ff)', top: '70%', left: '8%' }}
        >
          Troca de experiências ☕
        </div>

        <div className="container cta-whatsapp__content">
          <h2 className="cta-whatsapp__title">
            Não fique desenhando sozinh@ <span className="nowrap">no quadradinho.</span>
          </h2>
          <p className="cta-whatsapp__desc">
            Participe do nosso grupo oficial no WhatsApp. É lá onde as vagas reais aparecem, o bate-papo é livre e o networking acontece diariamente com profissionais do DF.
          </p>
          <div className="cta-whatsapp__cta">
            <a
              href="https://chat.whatsapp.com/D6ycyYpQCWFDedC5rY6IYt?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Bora entrar no WhatsApp!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
