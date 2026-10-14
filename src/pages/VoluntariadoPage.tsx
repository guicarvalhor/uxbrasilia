import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface VoluntariadoPageProps {
  onNavigate: (path: string) => void;
}

export const VoluntariadoPage: React.FC<VoluntariadoPageProps> = ({ onNavigate }) => {
  // Direct Page Form State with @formspree/react
  const [formspreeState, handleFormspreeSubmit] = useForm('xnpjgedp');

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    programa: 'Eventos',
    mensagem: '',
    _gotcha: '',
  });

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

  useEffect(() => {
    if (formspreeState.succeeded) {
      onNavigate('/obrigado');
    }
  }, [formspreeState.succeeded, onNavigate]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (formData._gotcha) {
      e.preventDefault();
      return;
    }
    handleFormspreeSubmit(e);
  };

  return (
    <main>
      {/* 1. HERO COM TEMA ROSA */}
      <section id="hero-voluntariado" className="hero pink">
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
              background: 'rgba(255,255,255,0.22)',
              color: '#fff',
              marginBottom: '16px',
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Faça Parte da Equipe
          </span>
          <h1 className="hero__title">
            Faça parte da mudança. <br /> <span className="nowrap">Seja um voluntário!</span>
          </h1>
          <p className="hero__desc">
            Junte-se a nós e ajude a fortalecer a comunidade de UX no Distrito Federal.
            Estamos com oportunidade aberta para apoio presencial nos nossos eventos!
          </p>
        </div>
      </section>

      {/* SEÇÃO PRINCIPAL */}
      <section id="vaga-eventos" style={{ padding: '60px 0 80px', backgroundColor: '#fff8fb' }}>
        <div className="container">

          {/* 1. FORMULÁRIO COMO PRIMEIRO ITEM DA PÁGINA DEPOIS DA HERO (LARGURA PADRONIZADA: 860px) */}
          <div
            id="cadastro-voluntario"
            style={{
              maxWidth: '860px',
              width: '100%',
              margin: '0 auto 40px auto',
              background: '#ffffff',
              border: '2px solid rgba(216, 59, 150, 0.35)',
              borderRadius: '24px',
              padding: 'clamp(28px, 5vw, 48px)',
              boxShadow: '0 18px 45px rgba(216, 59, 150, 0.1)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span
                style={{
                  background: 'rgba(216, 59, 150, 0.12)',
                  color: 'var(--pink)',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'inline-block',
                  marginBottom: '14px',
                  border: '1px solid rgba(216, 59, 150, 0.25)',
                }}
              >
                Vaga Aberta • Área: Eventos
              </span>
              <h2
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                  margin: '0 0 12px',
                  color: '#111827',
                }}
              >
                Inscrição para Voluntariado de Eventos
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.05rem', margin: 0, lineHeight: 1.6, maxWidth: '680px', marginInline: 'auto' }}>
                Preencha os campos abaixo para atuar no apoio e organização presencial dos eventos, palestras e workshops da comunidade UX Brasília.
              </p>
            </div>

            {/* Formspree General Validation Errors */}
            <ValidationError
              errors={formspreeState.errors}
              style={{
                color: '#dc2626',
                background: '#fef2f2',
                padding: '14px',
                borderRadius: '10px',
                marginBottom: '20px',
                fontSize: '0.95rem',
                border: '1px solid #fecaca',
                display: 'block',
              }}
            />

            <form
              onSubmit={onFormSubmit}
              action="https://formspree.io/f/xnpjgedp"
              method="POST"
              className="form"
            >
              {/* Campo Nome */}
              <div className="form__group" style={{ marginBottom: '20px' }}>
                <label htmlFor="vol-nome" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.95rem', color: '#1f2937' }}>
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  id="vol-nome"
                  name="nome"
                  required
                  placeholder="Ex: Mariana Castro"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1.5px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outlineColor: 'var(--pink)',
                  }}
                />
                <ValidationError
                  prefix="Nome"
                  field="nome"
                  errors={formspreeState.errors}
                  style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}
                />
              </div>

              {/* Campo Telefone */}
              <div className="form__group" style={{ marginBottom: '20px' }}>
                <label htmlFor="vol-phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.95rem', color: '#1f2937' }}>
                  Seu Telefone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  id="vol-phone"
                  name="telefone"
                  placeholder="(61) 98765-4321"
                  required
                  value={formData.telefone}
                  onChange={handlePhoneChange}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1.5px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outlineColor: 'var(--pink)',
                  }}
                />
                <ValidationError
                  prefix="Telefone"
                  field="telefone"
                  errors={formspreeState.errors}
                  style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}
                />
              </div>

              {/* Campo Área: Ajustada para Eventos apenas */}
              <div className="form__group" style={{ marginBottom: '20px' }}>
                <label htmlFor="vol-programa" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.95rem', color: '#1f2937' }}>
                  Área do Voluntariado
                </label>
                <input
                  type="text"
                  id="vol-programa"
                  name="programa"
                  readOnly
                  value="Eventos"
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1.5px solid rgba(216, 59, 150, 0.35)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    background: '#fff0f7',
                    fontWeight: 700,
                    color: 'var(--pink)',
                    cursor: 'default',
                  }}
                />
              </div>

              {/* Campo Motivação */}
              <div className="form__group" style={{ marginBottom: '26px' }}>
                <label htmlFor="vol-msg" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.95rem', color: '#1f2937' }}>
                  Por que você quer ser voluntário(a) de Eventos na UX Brasília? *
                </label>
                <textarea
                  id="vol-msg"
                  name="mensagem"
                  rows={4}
                  placeholder="Conte um pouco sobre sua motivação, disponibilidade aos sábados e o que você gostaria de vivenciar nos eventos..."
                  required
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1.5px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    outlineColor: 'var(--pink)',
                  }}
                />
                <ValidationError
                  prefix="Mensagem"
                  field="mensagem"
                  errors={formspreeState.errors}
                  style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '6px', display: 'block' }}
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

              <button
                type="submit"
                disabled={formspreeState.submitting}
                className="btn btn--primary"
                style={{
                  width: '100%',
                  padding: '16px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  background: 'var(--pink)',
                  borderColor: 'var(--pink)',
                  color: '#fff',
                  borderRadius: '999px',
                  boxShadow: '0 8px 24px rgba(216, 59, 150, 0.3)',
                  opacity: formspreeState.submitting ? 0.7 : 1,
                  cursor: formspreeState.submitting ? 'wait' : 'pointer',
                  transition: 'background 0.25s ease, transform 0.2s ease',
                }}
              >
                {formspreeState.submitting ? 'Enviando sua inscrição...' : 'Enviar Candidatura para Eventos'}
              </button>
            </form>
          </div>

          {/* 2. CARDS INFORMATIVOS COM LARGURA RIGOROSAMENTE PADRONIZADA (maxWidth: 860px) */}
          <div style={{ maxWidth: '860px', width: '100%', margin: '0 auto' }}>
            
            {/* Card 1: O que você fará no evento */}
            <div
              className="volunteer-info-card"
              style={{
                width: '100%',
                background: '#ffffff',
                border: '1.5px solid rgba(216, 59, 150, 0.22)',
                borderRadius: '24px',
                padding: 'clamp(24px, 4vw, 36px)',
                boxShadow: '0 12px 30px rgba(216, 59, 150, 0.05)',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    background: 'rgba(216, 59, 150, 0.12)',
                    color: 'var(--pink)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Atividades
                </span>
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: '1.35rem',
                    margin: 0,
                    color: 'var(--pink)',
                  }}
                >
                  🎯 O que você fará no evento
                </h3>
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#374151', lineHeight: '1.8', fontSize: '0.98rem' }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Recepção & Credenciamento:</strong> Receber os participantes com entusiasmo, conferir inscrições na entrada e entregar crachás e brindes.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Acolhimento & Orientação:</strong> Ajudar pessoas recém-chegadas a se localizarem pelo espaço (auditório, salas de workshop, banheiros, coffee break).
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Apoio a Palestrantes:</strong> Auxiliar na organização de apresentações, microfones e suporte logístico aos convidados do dia.
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <strong>Dinâmicas e Workshops:</strong> Dar suporte na distribuição de post-its, canetas, folhas e materiais durante as oficinas práticas.
                </li>
              </ul>
            </div>

            {/* Card 2: O que você leva dessa experiência */}
            <div
              className="volunteer-info-card"
              style={{
                width: '100%',
                background: '#ffffff',
                border: '1.5px solid rgba(216, 59, 150, 0.22)',
                borderRadius: '24px',
                padding: 'clamp(24px, 4vw, 36px)',
                boxShadow: '0 12px 30px rgba(216, 59, 150, 0.05)',
                marginBottom: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    background: 'rgba(216, 59, 150, 0.12)',
                    color: 'var(--pink)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Benefícios
                </span>
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: '1.35rem',
                    margin: 0,
                    color: 'var(--pink)',
                  }}
                >
                  ✨ O que você leva dessa experiência
                </h3>
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#374151', lineHeight: '1.8', fontSize: '0.98rem' }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Acesso total e gratuito:</strong> Assista integralmente às palestras e workshops do evento onde você estiver colaborando.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Networking direto:</strong> Contato próximo com os palestrantes, organizadores e profissionais de UX/UI atuantes no Distrito Federal.
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Certificado oficial:</strong> Emissão de comprovante com horas de voluntariado para enriquecer seu currículo, portfólio e faculdade.
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <strong>Sem exigência de experiência prévia:</strong> Nossa equipe de liderança oferece acolhimento e todas as orientações antes de cada encontro.
                </li>
              </ul>
            </div>

            {/* Card 3: Como funciona na prática & Encontros */}
            <div
              className="volunteer-info-card"
              style={{
                width: '100%',
                background: '#ffffff',
                border: '1.5px solid rgba(216, 59, 150, 0.22)',
                borderRadius: '24px',
                padding: 'clamp(24px, 4vw, 36px)',
                boxShadow: '0 12px 30px rgba(216, 59, 150, 0.05)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                  style={{
                    background: 'rgba(216, 59, 150, 0.12)',
                    color: 'var(--pink)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Formato & Encontros
                </span>
                <h3
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontSize: '1.35rem',
                    margin: 0,
                    color: 'var(--pink)',
                  }}
                >
                  📅 Como funciona na prática
                </h3>
              </div>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#374151', lineHeight: '1.8', fontSize: '0.98rem' }}>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Atuação Presencial:</strong> Nos dias e locais oficiais dos eventos da comunidade UX Brasília (habitualmente aos sábados à tarde).
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <strong>Alinhamento Prévio:</strong> Chegada 30 a 45 minutos antes do início do evento para um breve alinhamento, crachás e distribuição harmoniosa das tarefas.
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <strong>Coordenação Ágil:</strong> Os voluntários selecionados são inseridos no grupo oficial do WhatsApp para receber comunicados, escalas e combinados de cada evento.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
