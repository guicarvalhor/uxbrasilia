import React, { useEffect, useState } from 'react';

interface WelcomeModalProps {
  onNavigate: (path: string) => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="welcome-modal-overlay"
      id="welcome-modal"
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="welcome-modal" role="dialog" aria-modal="true" aria-labelledby="welcome-modal-title">
        <button
          className="welcome-modal__close"
          type="button"
          aria-label="Fechar modal"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        <div className="welcome-modal__badge">Colabore com a comunidade</div>
        <h2 id="welcome-modal-title">Voluntariado de Eventos UXBrasília</h2>
        <p>
          Estamos com inscrições abertas para pessoas voluntárias apoiarem os eventos presenciais da comunidade: recepção, acolhimento e credenciamento dos participantes. Venha fazer acontecer com a gente!
        </p>
        <div className="welcome-modal__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              setIsOpen(false);
              onNavigate('/voluntariado');
            }}
          >
            Quero ser voluntário(a)
          </button>
        </div>
      </div>
    </div>
  );
};
