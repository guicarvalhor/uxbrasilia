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

    // Filtros laterais das vagas
    const filterButtons = document.querySelectorAll('.filter-chip');
    const allSections = document.querySelectorAll('.area-section');
    const allCards = document.querySelectorAll('.program-card');

    const updateCounts = () => {
        const categoryCounts = {
            all: allCards.length * 2,
            eventos: document.querySelectorAll('.program-card[data-category="eventos"]').length * 2,
            conteudo: document.querySelectorAll('.program-card[data-category="conteudo"]').length * 2,
            midias: document.querySelectorAll('.program-card[data-category="midias"]').length * 2,
            parcerias: document.querySelectorAll('.program-card[data-category="parcerias"]').length * 2,
            comunidade: document.querySelectorAll('.program-card[data-category="comunidade"]').length * 2,
        };

        document.querySelectorAll('[data-count-for]').forEach((element) => {
            const key = element.dataset.countFor;
            element.textContent = categoryCounts[key] || 0;
        });

        const activeValue = document.getElementById('active-vacancies');
        if (activeValue) {
            activeValue.textContent = categoryCounts.all || 0;
        }
    };

    const applyFilter = (filterKey) => {
        const selectedFilter = filterKey || 'all';

        allSections.forEach((section) => {
            const shouldShow = selectedFilter === 'all' || section.dataset.area === selectedFilter;
            section.style.display = shouldShow ? '' : 'none';
        });

        filterButtons.forEach((button) => {
            const isActive = button.dataset.filter === selectedFilter;
            button.classList.toggle('active', isActive);
        });

        const visibleCount = selectedFilter === 'all'
            ? allCards.length * 2
            : document.querySelectorAll(`.program-card[data-category="${selectedFilter}"]`).length * 2;

        const activeValue = document.getElementById('active-vacancies');
        if (activeValue) {
            activeValue.textContent = visibleCount;
        }
    };

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            applyFilter(button.dataset.filter);
        });
    });

    updateCounts();
    applyFilter('all');

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