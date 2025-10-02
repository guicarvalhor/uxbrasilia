/* Salve este código como produto.js (VERSÃO CORRIGIDA) */
let submitted = false;

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
    const onDemandButton = document.getElementById('on-demand-button');
    const soldOutMessage = document.getElementById('sold-out-message');

    const orderModal = document.getElementById('order-modal');
    const closeModalButton = document.getElementById('close-modal');
    const modalSummary = document.getElementById('modal-order-summary');
    const pixKeyInput = document.getElementById('pix-key');
    const copyPixButton = document.getElementById('copy-pix-button');
    const copyFeedback = document.getElementById('copy-feedback');

    let selectedAttributes = {};
    let currentVariation = null; // <-- CORREÇÃO 1: Variável declarada aqui

    function initializePage() {
        document.title = `${product.name} — Lojinha`;
        productName.textContent = product.name;
        productDescription.textContent = product.description;
        mainImage.src = product.defaultImage;

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
        onDemandButton.classList.add('hidden');
        soldOutMessage.classList.add('hidden');

        if (variation) {
            stockStatus.className = 'stock-status';
            productPrice.textContent = `R$ ${variation.price.toFixed(2).replace('.', ',')}`;
            
            if (selectedAttributes['Cor'] && product.images[selectedAttributes['Cor']]) {
                mainImage.src = product.images[selectedAttributes['Cor']].main;
            }

            if (variation.stock > 0) {
                stockStatus.textContent = `${variation.stock} em estoque`;
                stockStatus.classList.add(variation.stock <= 5 ? 'status-low-stock' : 'status-in-stock');
                buyButton.classList.remove('hidden');
            } else if (variation.onDemand) {
                stockStatus.textContent = 'Disponível sob demanda';
                stockStatus.classList.add('status-low-stock');
                onDemandButton.classList.remove('hidden');
            } else {
                stockStatus.textContent = 'Indisponível';
                stockStatus.classList.add('status-out-of-stock');
                soldOutMessage.classList.remove('hidden');
            }
        } else {
            stockStatus.textContent = 'Combinação indisponível';
            stockStatus.className = 'stock-status status-out-of-stock';
            productPrice.textContent = '-';
            soldOutMessage.classList.remove('hidden');
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

    buyButton.addEventListener('click', openOrderModal);
    onDemandButton.addEventListener('click', openOrderModal);
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

