import React, { useState } from 'react';

interface VagasPageProps {
  onNavigate: (path: string) => void;
}

interface ProgramInfo {
  title: string;
  area: string;
  category: 'eventos' | 'midias' | 'parcerias';
  badge: string;
  description: string;
  activities?: string[];
  howItWorks?: string;
  isVolunteer?: boolean;
}

export const VagasPage: React.FC<VagasPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'eventos' | 'midias' | 'parcerias'>('all');
  const [selectedProgram, setSelectedProgram] = useState<ProgramInfo | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    linkedin: '',
    programa: '',
    mensagem: '',
    _gotcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const programs: ProgramInfo[] = [
    // --- VAGA ATIVA: VOLUNTARIADO DE EVENTOS ---
    {
      title: 'Voluntariado de Eventos (Apoio e Recepção)',
      area: 'Eventos e Experiências',
      category: 'eventos',
      badge: 'Voluntariado',
      description:
        'Vaga voltada para auxílio durante a realização dos eventos presenciais da comunidade UX Brasília: recepção e credenciamento de participantes, apoio à organização do espaço, logística, acolhimento e suporte a palestrantes e dinâmicas.',
      activities: [
        'Recepção acolhedora e credenciamento de participantes na entrada do evento;',
        'Orientação do público sobre a programação, banheiros, coffee break e espaços;',
        'Auxílio logístico a palestrantes, facilitadores e convidados;',
        'Apoio à organização geral do local e materiais de dinâmicas/workshops;',
        'Interação e colaboração direta com a equipe de coordenação durante todo o encontro.'
      ],
      howItWorks:
        'Como voluntário(a) de Eventos, você atuará presencialmente nos dias de encontros, palestras e workshops da UX Brasília. Não é exigida experiência prévia em eventos: nossa coordenação passará todas as orientações antes de cada edição. É uma oportunidade incrível para vivenciar os eventos por dentro, expandir seu networking com a comunidade e receber certificado de horas voluntárias.',
      isVolunteer: true,
    },

    /*
    // =========================================================================
    // VAGAS DE LIDERANÇA ANTERIORES (COMENTADAS CONFORME SOLICITAÇÃO)
    // =========================================================================

    // --- 1. EVENTOS E EXPERIÊNCIAS ---
    {
      title: 'Eventos e Experiências',
      area: 'Eventos e Experiências',
      category: 'eventos',
      badge: 'Dupla de Leads',
      description:
        'Dupla responsável por planejar e realizar os eventos da comunidade: workshops, palestras, encontros especiais, logística, recepção e experiência dos participantes.',
    },

    // --- 2. MÍDIAS E IDENTIDADE ---
    {
      title: 'Redes Sociais',
      area: 'Mídias e Identidade',
      category: 'midias',
      badge: 'Dupla de Leads',
      description:
        'Gestão dos canais digitais; criação de peças gráficas para redes sociais e materiais impressos; atualização e aplicação dos elementos visuais da marca.',
    },
    {
      title: 'Cobertura de Eventos',
      area: 'Mídias e Identidade',
      category: 'midias',
      badge: 'Dupla de Leads',
      description:
        'Registro fotográfico, gravação de vídeos, stories em tempo real e cobertura completa dos encontros.',
    },
    {
      title: 'Materiais & Recursos',
      area: 'Mídias e Identidade',
      category: 'midias',
      badge: 'Dupla de Leads',
      description:
        'Desenvolvimento de templates, guias de boas práticas, materiais educativos e apresentação de slides para eventos.',
    },

    // --- 3. PARCERIAS E RELACIONAMENTOS ---
    {
      title: 'Parcerias',
      area: 'Parcerias e Relacionamentos',
      category: 'parcerias',
      badge: 'Dupla de Leads',
      description:
        'Prospecção e formalização de parcerias estratégicas com empresas e instituições de ensino.',
    },
    {
      title: 'Oportunidades & Benefícios',
      area: 'Parcerias e Relacionamentos',
      category: 'parcerias',
      badge: 'Dupla de Leads',
      description:
        'Busca por vagas de emprego, descontos e benefícios exclusivos para os membros da comunidade.',
    },
    // =========================================================================
    */
  ];

  const counts = {
    all: programs.length,
    eventos: programs.filter((p) => p.category === 'eventos').length,
    midias: programs.filter((p) => p.category === 'midias').length,
    parcerias: programs.filter((p) => p.category === 'parcerias').length,
  };

  const handleCardClick = (prog: ProgramInfo) => {
    setSelectedProgram(prog);
    setIsDetailsOpen(true);
  };

  const handleOpenApply = (prog?: ProgramInfo) => {
    const target = prog || selectedProgram;
    if (target) {
      setFormData((prev) => ({
        ...prev,
        programa: `${target.title} (${target.area})`,
      }));
    }
    setIsDetailsOpen(false);
    setIsApplyOpen(true);
  };

  const formatBrazilianPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      telefone: formatBrazilianPhone(e.target.value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // honeypot

    setIsSubmitting(true);
    setSubmitError(null);

    const submissionData = new FormData();
    submissionData.append('nome', formData.nome);
    submissionData.append('telefone', formData.telefone);
    submissionData.append('linkedin', formData.linkedin);
    submissionData.append('programa', formData.programa);
    submissionData.append('mensagem', formData.mensagem);
    submissionData.append('submission_id', `sub-${Date.now()}`);

    try {
      const response = await fetch('https://formspree.io/f/xnpjgedp', {
        method: 'POST',
        body: submissionData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Falha no envio');
      }

      setIsApplyOpen(false);
      onNavigate('/obrigado');
    } catch (err) {
      console.error(err);
      setSubmitError('Não foi possível enviar sua candidatura neste momento. Tente novamente em alguns instantes.');
      setIsSubmitting(false);
    }
  };

  const filterMatches = (cat: 'eventos' | 'midias' | 'parcerias') => {
    return activeFilter === 'all' || activeFilter === cat;
  };

  const visiblePrograms = programs.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <>
      {/* HERO DA PÁGINA DE VAGAS */}
      <header id="hero-voluntariado" className="hero">
        <div className="hero__bg">
          <div className="rings rings--1"></div>
          <div className="rings rings--2"></div>
          <div className="rings rings--3"></div>
          <div className="rings rings--4"></div>
          <div className="rings rings--5"></div>
        </div>
        <div className="container hero__content-pink">
          <span
            className="badge"
            style={{
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              marginBottom: '16px',
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            CONSTRUA COM A GENTE
          </span>
          <h1 className="hero__title">Voluntariado & Vagas</h1>
          <p className="hero__desc">
            Faça parte da rede de pessoas que constroem a UX Brasília.
            <br />
            Confira a oportunidade aberta para apoio presencial em eventos e candidate-se.
          </p>
        </div>
      </header>

      {/* LISTAGEM DOS PROGRAMAS */}
      <main className="features" style={{ paddingTop: '80px' }} id="vagas-container">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 50px auto', textAlign: 'center' }}>
            <h2 className="section__title" style={{ marginBottom: '20px' }}>
              Oportunidades Disponíveis
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--muted)' }}>
              A comunidade cresce quando nos unimos para fazer acontecer. Venha colaborar diretamente no dia a dia dos nossos encontros presenciais.
            </p>
          </div>

          <div className="vagas-layout">
            <aside className="vagas-sidebar">
              <div className="vagas-sidebar__sticky">
                <div className="sidebar-card">
                  <p className="sidebar-label">Filtrar por</p>
                  <h3>Categoria</h3>
                  <div className="filter-list">
                    <button
                      className={`filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveFilter('all')}
                    >
                      Todas <span>{counts.all}</span>
                    </button>
                    <button
                      className={`filter-chip ${activeFilter === 'eventos' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveFilter('eventos')}
                    >
                      Eventos <span>{counts.eventos}</span>
                    </button>
                    <button
                      className={`filter-chip ${activeFilter === 'midias' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveFilter('midias')}
                    >
                      Mídias <span>{counts.midias}</span>
                    </button>
                    <button
                      className={`filter-chip ${activeFilter === 'parcerias' ? 'active' : ''}`}
                      type="button"
                      onClick={() => setActiveFilter('parcerias')}
                    >
                      Parcerias <span>{counts.parcerias}</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            <div className="positions-wrapper vagas-content">
              {visiblePrograms.length === 0 ? (
                <div
                  style={{
                    background: '#f9fafb',
                    borderRadius: '20px',
                    padding: '40px 24px',
                    textAlign: 'center',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <p style={{ fontSize: '1.1rem', color: 'var(--muted)', margin: '0 0 16px' }}>
                    Nenhuma vaga aberta nesta categoria no momento.
                  </p>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => setActiveFilter('all')}
                  >
                    Ver todas as vagas
                  </button>
                </div>
              ) : null}

              {/* 1. EVENTOS E EXPERIÊNCIAS */}
              {filterMatches('eventos') && programs.filter((p) => p.category === 'eventos').length > 0 && (
                <div className="area-section" data-area="eventos">
                  <h3 className="area-section__title">🎯 Eventos e Experiências</h3>
                  <div className="programs-grid">
                    {programs
                      .filter((p) => p.category === 'eventos')
                      .map((prog) => (
                        <div
                          key={prog.title}
                          className="program-card"
                          onClick={() => handleCardClick(prog)}
                        >
                          <div>
                            <h4 style={{ fontSize: '1.15rem', margin: '0 0 6px 0', fontWeight: 700 }}>
                              {prog.title}
                            </h4>
                            <span
                              className="program-badge"
                              style={{
                                background: 'rgba(56, 178, 111, 0.15)',
                                color: 'var(--green-600)',
                                border: '1px solid rgba(56, 178, 111, 0.3)',
                              }}
                            >
                              {prog.badge}
                            </span>
                            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', margin: '10px 0 0 0', lineHeight: 1.5 }}>
                              {prog.description.slice(0, 115)}...
                            </p>
                          </div>
                          <span className="card-link-text">Quero saber mais →</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* 2. MÍDIAS E IDENTIDADE */}
              {filterMatches('midias') && programs.filter((p) => p.category === 'midias').length > 0 && (
                <div className="area-section" data-area="midias">
                  <h3 className="area-section__title">🎨 Mídias e Identidade</h3>
                  <div className="programs-grid">
                    {programs
                      .filter((p) => p.category === 'midias')
                      .map((prog) => (
                        <div
                          key={prog.title}
                          className="program-card"
                          onClick={() => handleCardClick(prog)}
                        >
                          <div>
                            <h4 style={{ fontSize: '1.1rem', margin: '0 0 6px 0', fontWeight: 700 }}>
                              {prog.title}
                            </h4>
                            <span className="program-badge">{prog.badge}</span>
                          </div>
                          <span className="card-link-text">Quero saber mais →</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* 3. PARCERIAS E RELACIONAMENTOS */}
              {filterMatches('parcerias') && programs.filter((p) => p.category === 'parcerias').length > 0 && (
                <div className="area-section" data-area="parcerias">
                  <h3 className="area-section__title">🤝 Parcerias e Relacionamentos</h3>
                  <div className="programs-grid">
                    {programs
                      .filter((p) => p.category === 'parcerias')
                      .map((prog) => (
                        <div
                          key={prog.title}
                          className="program-card"
                          onClick={() => handleCardClick(prog)}
                        >
                          <div>
                            <h4 style={{ fontSize: '1.1rem', margin: '0 0 6px 0', fontWeight: 700 }}>
                              {prog.title}
                            </h4>
                            <span className="program-badge">{prog.badge}</span>
                          </div>
                          <span className="card-link-text">Quero saber mais →</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* SEÇÃO 1: RELAÇÃO ENTRE PAPÉIS */}
      <section className="roles-section">
        <div className="container">
          <div className="lead-guidance__intro">
            <span className="section-kicker section-kicker--green">Relação entre papéis</span>
            <h2 className="section__title">Cada papel tem um lugar no processo.</h2>
            <p>
              Entender a diferença entre Head, Lead e voluntário(a) ajuda a deixar a comunidade mais clara, colaborativa e autônoma.
            </p>
          </div>

          <div className="roles-grid">
            <div className="role-card">
              <div className="role-card__icon role-card__icon--blue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
                </svg>
              </div>
              <h3 className="role-card__title" style={{ color: 'var(--blue)' }}>
                Head / Coordenação de Área
              </h3>
              <p className="role-card__desc">
                Responsável por uma frente estratégica da UX Brasília. Define direcionamento, prioridades, alinhamento e dá suporte aos programas da sua área.
              </p>
            </div>

            <div className="role-card">
              <div className="role-card__icon role-card__icon--yellow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21V4" />
                  <path d="M5 5c4-3 7 3 14 0v9c-7 3-10-3-14 0" />
                </svg>
              </div>
              <h3 className="role-card__title" style={{ color: 'var(--yellow-700)' }}>
                Lead de Programa
              </h3>
              <p className="role-card__desc">
                Responsável por um programa ou iniciativa específica. Tem autonomia para conduzir, planejar e executar as ações com liberdade e foco estratégico.
              </p>
            </div>

            <div className="role-card" style={{ border: '2px solid var(--green)', transform: 'translateY(-4px)' }}>
              <div className="role-card__icon role-card__icon--pink" style={{ background: 'rgba(56, 178, 111, 0.12)', color: 'var(--green-600)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="role-card__title" style={{ color: 'var(--green-600)' }}>
                Voluntário(a) de Eventos (Vaga Aberta)
              </h3>
              <p className="role-card__desc">
                Colabora com sua energia e presença nos eventos presenciais da comunidade: recepção, credenciamento, apoio a palestrantes e suporte aos participantes.
              </p>
            </div>
          </div>

          <p className="roles-footer-note">
            Head representa <span style={{ color: 'var(--blue)', fontWeight: 600 }}>responsabilidade sobre uma área</span>. Lead representa <span style={{ color: 'var(--yellow-800)', fontWeight: 600 }}>responsabilidade sobre um programa</span>. Voluntários(as) representam a força prática e o acolhimento nos encontros da comunidade.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2: COMO É ATUAR NO VOLUNTARIADO DE EVENTOS */}
      <section className="lead-guidance-section">
        <div className="container">
          <div className="lead-guidance__intro">
            <span className="section-kicker section-kicker--green">Antes de se candidatar</span>
            <h2 className="section__title">Fazer parte do voluntariado é acolher e construir junto.</h2>
            <p>
              Ao entrar no time de apoio em eventos, você se torna o primeiro ponto de contato e o coração do acolhimento das pessoas que participam da UX Brasília.
            </p>
          </div>

          <div className="lead-guidance__grid">
            <article className="lead-guidance__card">
              <div className="lead-guidance__card-head">
                <span className="lead-guidance__number">01</span>
                <span className="lead-guidance__arrow" aria-hidden="true">↗</span>
              </div>
              <h3>O que você fará</h3>
              <p>
                Apoiar a recepção, organizar crachás e listas de presença, tirar dúvidas de participantes, apoiar palestrantes com materiais e colaborar para o evento fluir com leveza e empatia.
              </p>
            </article>

            <article className="lead-guidance__card">
              <div className="lead-guidance__card-head">
                <span className="lead-guidance__number">02</span>
                <span className="lead-guidance__arrow" aria-hidden="true">↗</span>
              </div>
              <h3>O que você leva</h3>
              <p>
                Acesso gratuito aos eventos, contato direto com palestrantes e lideranças de design do DF, networking genuíno, certificado de horas voluntárias e menção como voluntário(a) oficial.
              </p>
            </article>

            <article className="lead-guidance__card">
              <div className="lead-guidance__card-head">
                <span className="lead-guidance__number">03</span>
                <span className="lead-guidance__arrow" aria-hidden="true">↗</span>
              </div>
              <h3>Como vamos trabalhar</h3>
              <p>
                A dedicação principal é presencial, nos dias e horários dos eventos (geralmente sábados ou noites de dias úteis), com um alinhamento prévio breve com a coordenação para repasse de funções.
              </p>
            </article>
          </div>

          <div className="lead-guidance__note">
            <strong>Uma comunidade acolhedora, gratuita e voluntária</strong>
            <p>
              Todo o trabalho na UX Brasília é colaborativo e voluntário, feito com respeito aos limites e horários de cada pessoa. Venha somar com a sua energia!
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: NOSSOS PRINCÍPIOS */}
      <section className="principles-section">
        <div className="container principles-layout">
          <div className="principles-visual" aria-hidden="true">
            <img src="/assets/pulo.svg" alt="Ilustração de colaboração e movimento" />
          </div>

          <div className="principles-content">
            <div className="section-kicker section-kicker--green">Nossos princípios</div>
            <h2 className="section__title">Uma comunidade que aprende e cresce junto.</h2>

            <div className="principles-list">
              <article className="principle-card-item">
                <div className="principle-card-item__icon">🤝</div>
                <div>
                  <h4>Colaboração</h4>
                  <p>Construímos juntos, com ajuda mútua e respeito ao tempo e ao papel de cada pessoa.</p>
                </div>
              </article>

              <article className="principle-card-item">
                <div className="principle-card-item__icon">💬</div>
                <div>
                  <h4>Transparência</h4>
                  <p>Escuta ativa, clareza de processos e comunicação aberta são parte do nosso jeito de agir.</p>
                </div>
              </article>

              <article className="principle-card-item">
                <div className="principle-card-item__icon">🌱</div>
                <div>
                  <h4>Inclusão</h4>
                  <p>Valorizamos diversidade, acolhimento e um ambiente onde mais pessoas possam participar.</p>
                </div>
              </article>

              <article className="principle-card-item">
                <div className="principle-card-item__icon">✨</div>
                <div>
                  <h4>Impacto</h4>
                  <p>Geramos ações que realmente fortalecem a comunidade e ampliam oportunidades para a área.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: COMO PARTICIPAR */}
      <section className="participate-section">
        <div className="container participate-layout">
          <div className="participate-copy">
            <div className="section-kicker section-kicker--blue">Como participar</div>
            <h2 className="section__title">A sua contribuição começa por aqui.</h2>
            <p className="participate-text">
              Candidate-se preenchendo o formulário de voluntariado de eventos. Nossa equipe entrará em contato para te dar as boas-vindas.
            </p>

            <div className="participate-steps">
              <div className="participate-step">
                <span>1</span>
                <p>Preencha seus dados na vaga de voluntariado de eventos.</p>
              </div>
              <div className="participate-step">
                <span>2</span>
                <p>Entraremos em contato com você via WhatsApp para os alinhamentos.</p>
              </div>
              <div className="participate-step">
                <span>3</span>
                <p>Receba as instruções e venha fazer a experiência dos eventos acontecer!</p>
              </div>
            </div>

            <a
              href="#vagas-container"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('vagas-container')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="participate-cta-box"
            >
              <strong>Quero ser voluntário(a) de Eventos!</strong>
            </a>
          </div>

          <div className="participate-visual" aria-hidden="true">
            <img src="/assets/team.svg" alt="Equipe da UX Brasília" />
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA WHATSAPP */}
      <section className="cta-whatsapp">
        <div className="cta-whatsapp__bg">
          <div className="rings rings--2"></div>
        </div>
        <div className="container cta-whatsapp__content">
          <h2 className="cta-whatsapp__title">Tem dúvidas sobre o voluntariado?</h2>
          <p className="cta-whatsapp__desc">
            Fale diretamente com a nossa Coordenação pelo WhatsApp e tire suas dúvidas sobre datas de eventos, funções e apoio.
          </p>
          <div className="cta-whatsapp__cta">
            <a
              href="https://chat.whatsapp.com/D6ycyYpQCWFDedC5rY6IYt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ background: '#25d366', borderColor: 'rgba(0,0,0,0.1)' }}
            >
              Falar com a Coordenação
            </a>
          </div>
        </div>
      </section>

      {/* 1. MODAL DE DETALHES DO PROGRAMA */}
      {isDetailsOpen && selectedProgram && (
        <div
          id="details-modal"
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsDetailsOpen(false);
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <span id="modal-program-area" className="modal-area-tag">
                {selectedProgram.area}
              </span>
              <button
                id="close-details-modal"
                className="close-button"
                onClick={() => setIsDetailsOpen(false)}
                type="button"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h2
                id="modal-program-title"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '26px', margin: '0 0 12px 0' }}
              >
                {selectedProgram.title}
              </h2>
              <p
                id="modal-program-desc"
                style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}
              >
                {selectedProgram.description}
              </p>

              {selectedProgram.activities && (
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ margin: '0 0 10px', fontSize: '1rem', color: 'var(--ink)' }}>
                    Atividades e atribuições:
                  </h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, color: '#4b5563', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {selectedProgram.activities.map((act, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>{act}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-info-panel">
                <h4>Como funciona:</h4>
                <p>
                  {selectedProgram.howItWorks ||
                    'Você fará parte da equipe de apoio presencial nos eventos e workshops da UX Brasília.'}
                </p>
              </div>
            </div>
            <div className="modal-footer" style={{ marginTop: '20px' }}>
              <button
                type="button"
                id="btn-apply-from-details"
                className="btn btn--primary"
                style={{ width: '100%' }}
                onClick={() => handleOpenApply()}
              >
                Quero me candidatar para esta vaga
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. MODAL DE CANDIDATURA */}
      {isApplyOpen && (
        <div
          id="order-modal"
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsApplyOpen(false);
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '24px', margin: 0 }}>
                Candidatura para Voluntariado
              </h2>
              <button
                id="close-order-modal"
                className="close-button"
                onClick={() => setIsApplyOpen(false)}
                type="button"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p style={{ marginBottom: '20px', fontSize: '0.95rem', color: 'var(--muted)' }}>
                Preencha os campos abaixo para manifestar seu interesse em colaborar durante os eventos da comunidade. Entraremos em contato via WhatsApp!
              </p>

              {submitError && (
                <div style={{ color: '#dc2626', marginBottom: '16px', fontSize: '0.9rem' }}>
                  {submitError}
                </div>
              )}

              <form id="order-form" onSubmit={handleSubmit} className="form">
                <div className="form__group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="user-name" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    id="user-name"
                    name="nome"
                    required
                    placeholder="Ex: Ana Souza"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>

                <div className="form__group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="user-phone" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                    Seu Telefone (WhatsApp):
                  </label>
                  <input
                    type="tel"
                    id="user-phone"
                    name="telefone"
                    placeholder="(XX) XXXXX-XXXX"
                    required
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>

                <div className="form__group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="user-linkedin" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                    Link do seu LinkedIn:
                  </label>
                  <input
                    type="url"
                    id="user-linkedin"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/seu-perfil"
                    required
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>

                <div className="form__group" style={{ marginBottom: '16px' }}>
                  <label htmlFor="target-program" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                    Vaga / Programa Selecionado:
                  </label>
                  <input
                    type="text"
                    id="target-program"
                    name="programa"
                    readOnly
                    value={formData.programa}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      background: '#f3f4f6',
                      fontWeight: 600,
                    }}
                  />
                </div>

                <div className="form__group" style={{ marginBottom: '20px' }}>
                  <label htmlFor="user-background" style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
                    Por que você quer ser voluntário(a) de Eventos na UX Brasília?
                  </label>
                  <textarea
                    id="user-background"
                    name="mensagem"
                    rows={3}
                    placeholder="Conte um pouco sobre sua motivação, disponibilidade e o que você gostaria de aprender/compartilhar..."
                    required
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
                  />
                </div>

                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData._gotcha}
                  onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  style={{ position: 'absolute', left: '-5000px', opacity: 0, pointerEvents: 'none' }}
                  aria-hidden="true"
                />

                <div className="modal-footer" style={{ marginTop: '20px' }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn--primary"
                    style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Candidatura de Voluntariado'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
