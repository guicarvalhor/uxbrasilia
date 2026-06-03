/* Salve este código como produto.js (VERSÃO CORRIGIDA) */
let submitted = false;
window.submitted = submitted;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = storeProducts[productId];

    if (!product) {
        document.querySelector('.product-container').innerHTML = "<h1>Produto não encontrado!</h1>";
        return;
    }

    const mainImage = document.getElementById('main-product-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const optionsContainer = document.getElementById('product-options-container');
    const stockStatus = document.getElementById('stock-status');
    const buyButton = document.getElementById('buy-button');
    const whatsappReserve = document.getElementById('whatsapp-reserve');
    const soldOutMessage = document.getElementById('sold-out-message');

    const orderModal = document.getElementById('order-modal');
    const closeModalButton = document.getElementById('close-modal');
    const modalSummary = document.getElementById('modal-order-summary');
    const pixKeyInput = document.getElementById('pix-key');
    const galleryThumbs = document.getElementById('product-gallery-thumbs');
    const mainProductVideo = document.getElementById('main-product-video');
    const productMediaViewer = document.querySelector('.product-media-viewer');

    let galleryItems = [];
    let selectedMediaIndex = 0;
    const copyPixButton = document.getElementById('copy-pix-button');
    const copyFeedback = document.getElementById('copy-feedback');

    let selectedAttributes = {};
    let currentVariation = null; // <-- CORREÇÃO 1: Variável declarada aqui

    function initializePage() {
        document.title = `${product.name} — Lojinha`;
        productName.textContent = product.name;
        document.getElementById('breadcrumb-current').textContent = product.name;
        productDescription.textContent = product.description;
        mainImage.src = product.defaultImage;

        initializeGallery();

        const optionTypes = Object.keys(product.variations[0].attributes);
        
        optionTypes.forEach(type => {
            const values = [...new Set(product.variations.map(v => v.attributes[type]))];
            createOptionGroup(type, values);
        });

        optionsContainer.addEventListener('click', handleOptionClick);

        optionTypes.forEach(type => {
            const firstOption = optionsContainer.querySelector(`[data-type="${type}"]`);
            if (firstOption) {
                firstOption.classList.add('selected');
                selectedAttributes[type] = firstOption.dataset.value;
            }
        });

        updateProductView();
    }

    function createOptionGroup(type, values) {
        const groupWrapper = document.createElement('div');
        groupWrapper.className = 'option-group';
        
        const label = document.createElement('label');
        label.textContent = `${type}:`;
        groupWrapper.appendChild(label);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = type.toLowerCase() === 'cor' ? 'color-options' : 'size-options';

        values.forEach(value => {
            const optionButton = document.createElement('button');
            optionButton.dataset.type = type;
            optionButton.dataset.value = value;

            if (type.toLowerCase() === 'cor') {
                optionButton.className = 'color-swatch';
                optionButton.title = value;
                const colorData = product.images[value];
                if (colorData?.colorHex) {
                    optionButton.style.backgroundColor = colorData.colorHex;
                } else if (colorData?.thumb) {
                    optionButton.innerHTML = `<img src="${colorData.thumb}" alt="Miniatura ${value}">`;
                }
            } else {
                optionButton.className = 'size-option';
                optionButton.textContent = value;
            }
            optionsDiv.appendChild(optionButton);
        });
        groupWrapper.appendChild(optionsDiv);
        optionsContainer.appendChild(groupWrapper);
    }
    
    function handleOptionClick(e) {
        const target = e.target.closest('button');
        if (!target || !target.dataset.type) return;

        const { type, value } = target.dataset;
        
        selectedAttributes[type] = value;
        
        const siblings = optionsContainer.querySelectorAll(`[data-type="${type}"]`);
        siblings.forEach(btn => btn.classList.remove('selected'));
        target.classList.add('selected');

        updateProductView();
    }

    function updateProductView() {
        const variation = product.variations.find(v => {
            return Object.keys(selectedAttributes).every(key => {
                return v.attributes[key] === selectedAttributes[key];
            });
        });

        currentVariation = variation; // <-- CORREÇÃO 2: Valor atribuído aqui

        buyButton.classList.add('hidden');
        buyButton.style.display = 'none';
        whatsappReserve.classList.add('hidden');
        whatsappReserve.style.display = 'none';
        soldOutMessage.classList.add('hidden');
        soldOutMessage.style.display = 'none';

        if (variation) {
            stockStatus.className = 'stock-status';
            productPrice.textContent = `R$ ${variation.price.toFixed(2).replace('.', ',')}`;
            
                if (selectedAttributes['Cor'] && product.images[selectedAttributes['Cor']]) {
                if (!galleryItems.length || galleryItems[selectedMediaIndex].type === 'image') {
                    mainImage.src = product.images[selectedAttributes['Cor']].main;
                }
            }

            if (variation.stock > 0) {
                stockStatus.textContent = `${variation.stock} em estoque`;
                stockStatus.classList.add(variation.stock <= 5 ? 'status-low-stock' : 'status-in-stock');
                buyButton.classList.remove('hidden');
                buyButton.style.display = 'block';
            } else if (variation.onDemand) {
                stockStatus.textContent = 'Disponível sob demanda';
                stockStatus.classList.add('status-low-stock');
            } else {
                // Sem estoque — tratamento centralizado
                stockStatus.textContent = '';
                stockStatus.className = 'stock-status';

                if (product.whatsappLink) {
                    // Não mostrar o botão principal; mostrar link para WhatsApp como alternativa
                    whatsappReserve.href = product.whatsappLink;
                    whatsappReserve.classList.remove('hidden');
                    whatsappReserve.style.display = 'inline-block';
                }

                // Mostrar 'Produto Esgotado' apenas para o produto cobogo ou quando não houver WhatsApp
                if (productId === 'cobogo' || !product.whatsappLink) {
                    soldOutMessage.classList.remove('hidden');
                    soldOutMessage.style.display = 'block';
                } else {
                    soldOutMessage.classList.add('hidden');
                    soldOutMessage.style.display = 'none';
                }
            }
        } else {
            if (product.whatsappLink) {
                stockStatus.textContent = '';
                stockStatus.className = 'stock-status';
            } else {
                stockStatus.textContent = 'Combinação indisponível';
                stockStatus.className = 'stock-status status-out-of-stock';
                soldOutMessage.classList.remove('hidden');
            }
            productPrice.textContent = '-';
        }

        // Se o produto tem link de WhatsApp, permitir reservar mesmo com estoque 0
        // Do not force-show the buy button for products with WhatsApp link.
        // If product has whatsappLink and no stock, we show the whatsappReserve link instead (handled above).

        // Garantir que o estado visual da mensagem esgotado seja aplicado via inline style
        if (soldOutMessage.classList.contains('hidden')) {
            soldOutMessage.style.display = 'none';
        } else {
            soldOutMessage.style.display = 'block';
        }

        if (galleryItems.length) {
            setActiveMedia(selectedMediaIndex);
        }
    }

    function initializeGallery() {
        galleryItems = product.gallery || [
            { type: 'image', src: product.defaultImage, thumb: product.defaultImage }
        ];
        renderGallery();
        setActiveMedia(selectedMediaIndex);
    }

    function renderGallery() {
        if (!galleryThumbs) return;
        galleryThumbs.innerHTML = '';

        galleryItems.forEach((item, index) => {
            const thumbButton = document.createElement('button');
            thumbButton.type = 'button';
            thumbButton.className = 'product-thumbnail';
            thumbButton.dataset.index = index;
            thumbButton.setAttribute('aria-label', item.type === 'video' ? 'Ver vídeo' : 'Ver imagem');

            if (item.type === 'video') {
                const thumbImg = document.createElement('img');
                thumbImg.src = item.thumb || item.src;
                thumbImg.alt = 'Miniatura do vídeo';
                thumbButton.appendChild(thumbImg);
                const overlay = document.createElement('span');
                overlay.className = 'thumb-play';
                overlay.textContent = '▶';
                thumbButton.appendChild(overlay);
            } else {
                const thumbImg = document.createElement('img');
                thumbImg.src = item.thumb || item.src;
                thumbImg.alt = 'Miniatura do produto';
                thumbButton.appendChild(thumbImg);
            }

            thumbButton.addEventListener('click', () => {
                selectedMediaIndex = index;
                setActiveMedia(index);
            });
            galleryThumbs.appendChild(thumbButton);
        });
    }

    function setActiveMedia(index) {
        if (!galleryItems[index]) return;
        const item = galleryItems[index];
        const thumbButtons = galleryThumbs?.querySelectorAll('.product-thumbnail') || [];
        thumbButtons.forEach((button, buttonIndex) => {
            button.classList.toggle('active', buttonIndex === index);
        });

        if (item.type === 'video') {
            mainImage.classList.add('hidden');
            mainProductVideo.classList.remove('hidden');
            mainImage.style.display = 'none';
            mainProductVideo.style.display = 'block';
            if (mainProductVideo.src !== item.src) {
                mainProductVideo.src = item.src;
                mainProductVideo.load();
            }
            mainProductVideo.play().catch(() => {});
        } else {
            mainProductVideo.classList.add('hidden');
            mainImage.classList.remove('hidden');
            mainProductVideo.style.display = 'none';
            mainImage.style.display = 'block';
            mainImage.src = item.src;
        }
    }

    function openOrderModal() {
        if (!currentVariation) {
            alert("Por favor, selecione uma opção válida.");
            return;
        }

        // Preenche o resumo visual (código que você já tem)
        const selectionDetails = Object.entries(currentVariation.attributes)
            .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
            .join(', ');

        modalSummary.innerHTML = `
            <p><strong>Produto:</strong> ${product.name}</p>
            <p>${selectionDetails}</p>
            <p class="price"><strong>Valor:</strong> R$ ${currentVariation.price.toFixed(2).replace('.', ',')}</p>
        `;

        // Preenche os campos ocultos do formulário
        const detailsForForm = Object.entries(currentVariation.attributes).map(([k, v]) => `${k}: ${v}`).join(' / ');
        document.getElementById('form-product-details').value = `${product.name} - ${detailsForForm}`;
        document.getElementById('form-product-value').value = `R$ ${currentVariation.price.toFixed(2)}`;
        
        // Mostra o modal
        orderModal.classList.remove('hidden');
    }

    function closeModal() {
        orderModal.classList.add('hidden');
    }

    if (product.whatsappLink) {
        buyButton.addEventListener('click', () => {
            // Abrir WhatsApp em nova aba sem acesso ao opener
            const newWin = window.open(product.whatsappLink, '_blank');
            if (newWin) newWin.opener = null;
        });
    } else {
        buyButton.addEventListener('click', openOrderModal);
    }

    closeModalButton.addEventListener('click', closeModal);
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            closeModal();
        }
    });

    copyPixButton.addEventListener('click', () => {
        pixKeyInput.select();
        document.execCommand('copy');
        copyFeedback.style.display = 'block';
        setTimeout(() => {
            copyFeedback.style.display = 'none';
        }, 2000);
    });

    initializePage();
});

