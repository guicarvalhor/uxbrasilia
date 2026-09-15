// Lógica de manipulação de modais para a página de vagas
document.addEventListener('DOMContentLoaded', () => {
    let currentSelectedProgram = '';

    const detailsModal = document.getElementById('details-modal');
    const orderModal = document.getElementById('order-modal');
    const orderForm = document.getElementById('order-form');

    const closeDetailsBtn = document.getElementById('close-details-modal');
    const closeOrderBtn = document.getElementById('close-order-modal');
    const btnApplyFromDetails = document.getElementById('btn-apply-from-details');

    // Assegura que os modais iniciem fechados
    if (detailsModal) detailsModal.classList.add('hidden');
    if (orderModal) orderModal.classList.add('hidden');

    // Função global acessada pelos cards para abrir os detalhes
    window.openDetailsModal = function(title, area, desc) {
        currentSelectedProgram = `${title} (${area})`;
        document.getElementById('modal-program-title').innerText = title;
        document.getElementById('modal-program-area').innerText = area;
        document.getElementById('modal-program-desc').innerText = desc;

        detailsModal.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    };

    // Fechar modal de detalhes
    if (closeDetailsBtn) {
        closeDetailsBtn.addEventListener('click', () => {
            detailsModal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        });
    }

    // Transição do modal de detalhes para o formulário de candidatura
    if (btnApplyFromDetails) {
        btnApplyFromDetails.addEventListener('click', () => {
            detailsModal.classList.add('hidden');
            document.getElementById('target-program').value = currentSelectedProgram;
            orderModal.classList.remove('hidden');
        });
    }

    // Fechar modal de candidatura
    if (closeOrderBtn) {
        closeOrderBtn.addEventListener('click', () => {
            orderModal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        });
    }

    // Envio do formulário via Formspree com redirecionamento para página de confirmação
    if (orderForm) {
        orderForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const honeypot = orderForm.querySelector('input[name="_gotcha"]');
            if (honeypot && honeypot.value.trim() !== '') {
                console.warn('Submission blocked by honeypot field.');
                return;
            }

            const submitButton = orderForm.querySelector('button[type="submit"]');
            const originalText = submitButton ? submitButton.textContent.trim() : 'Enviar';

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';
                submitButton.style.opacity = '0.7';
                submitButton.style.cursor = 'wait';
            }

            try {
                const response = await fetch(orderForm.action, {
                    method: 'POST',
                    body: new FormData(orderForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error('Falha ao enviar formulário');
                }

                window.location.href = '/obrigado.html';
            } catch (error) {
                console.error('Erro ao enviar candidatura:', error);
                alert('Não foi possível enviar sua candidatura neste momento. Tente novamente em alguns instantes.');

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    submitButton.style.opacity = '1';
                    submitButton.style.cursor = 'pointer';
                }
            }
        });
    }

    // Fechar ao clicar fora das caixas dos modais
    window.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
            detailsModal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
        if (e.target === orderModal) {
            orderModal.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        }
    });
});