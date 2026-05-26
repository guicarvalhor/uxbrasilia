/**
 * Menu e Footer Centralizador
 * Gerencia menu e footer dinâmicos em todas as páginas
 * Altere uma vez aqui e atualiza em todas as páginas automaticamente
 */

// ====================
// CONFIGURAÇÃO DO MENU
// ====================
const menuConfig = {
    brand: {
        href: "https://www.uxbrasilia.com.br",
        ariaLabel: "UXBrasília — Página inicial",
        logo: "/assets/logo-ux.svg"
    },
    links: [
        { href: "/", label: "Página inicial", id: "link-home" },
        //{ href: "/voluntariado.html", label: "Voluntariado", id: "link-voluntariado" },
        { href: "/blog.html", label: "Blog", id: "link-blog" },
        { href: "/parceiros.html", label: "Parceiros", id: "link-parceiros" },
        //{ href: "/catalogo.html", label: "Lojinha", id: "link-lojinha" },
        //{ href: "/decola.html", label: "Decola UX", id: "link-decola" },
        { href: "/contato.html", label: "Contatos", id: "link-contatos" }
    ]
};

// ====================
// CONFIGURAÇÃO DO FOOTER
// ====================
const footerConfig = {
    brand: {
        href: "#hero",
        ariaLabel: "Voltar ao topo",
        logo: "/assets/logo-ux.svg",
        tagline: "A comunidade onde o design é coletivo <br> e a experiência é compartilhada!"
    },
    columns: [
        {
            title: "Comunidade",
            links: [
                //{ href: "/voluntariado.html", label: "Voluntariado" },
                { href: "/catalogo.html", label: "Lojinha" },
                { href: "/blog.html", label: "Blog" }
            ]
        },
        {
            title: "Nossas redes",
            links: [
                { href: "https://www.instagram.com/uxbrasilia", label: "Instagram", target: "_blank" },
                { href: "https://www.linkedin.com/company/uxbrasilia", label: "Linkedin", target: "_blank" },
                { href: "https://www.youtube.com/@UXBrasilia", label: "Youtube", target: "_blank" }
            ]
        }
    ],
    copyright: "© 2025 UXBrasília. Todos os direitos reservados."
};

// ====================
// FUNÇÃO: RENDERIZAR MENU
// ====================
function renderMenu() {
    const navContainer = document.getElementById('menu-container');
    if (!navContainer) {
        console.warn("Elemento #menu-container não encontrado");
        return;
    }

    const currentPage = getCurrentPage();

    let navHTML = `
        <header class="nav" id="top-nav" role="banner" aria-label="Navegação principal">
            <div class="container nav__inner">
                <a class="brand" href="${menuConfig.brand.href}" aria-label="${menuConfig.brand.ariaLabel}">
                    <img src="${menuConfig.brand.logo}" alt="Logo UX Brasília">
                </a>

                <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-links">
                    <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path class="hamburger-lines" d="M3 12h18M3 6h18M3 18h18"></path>
                        <path class="close-lines" d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>

                <nav class="nav__links" id="menu-links" aria-label="Links do site">
    `;

    menuConfig.links.forEach(link => {
        const isActive = isLinkActive(link.href, currentPage) ? 'id="active"' : '';
        navHTML += `<a href="${link.href}" ${isActive}>${link.label}</a>`;
    });

    navHTML += `
                </nav>
            </div>
        </header>
    `;

    navContainer.innerHTML = navHTML;

    // Reattach event listeners
    attachMenuEventListeners();
}

// ====================
// FUNÇÃO: RENDERIZAR FOOTER
// ====================
function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) {
        console.warn("Elemento #footer-container não encontrado");
        return;
    }

    let footerHTML = `
        <footer id="contato" class="footer" role="contentinfo">
            <div class="container footer__inner">
                <a class="brand brand--footer" href="${footerConfig.brand.href}" aria-label="${footerConfig.brand.ariaLabel}">
                    <img src="${footerConfig.brand.logo}" alt="" srcset="">
                    <p id="footer-text">${footerConfig.brand.tagline}</p>
                </a>

                <div class="footer__cols">
    `;

    footerConfig.columns.forEach(column => {
        footerHTML += `
            <div class="footer__col">
                <h4>${column.title}</h4>
                <ul>
        `;
        column.links.forEach(link => {
            const target = link.target ? `target="${link.target}"` : '';
            footerHTML += `<li><a href="${link.href}" ${target}>${link.label}</a></li>`;
        });
        footerHTML += `
                </ul>
            </div>
        `;
    });

    footerHTML += `
                </div>
            </div>

            <div class="footer__copy">
                <div class="container">
                    ${footerConfig.copyright}
                </div>
            </div>
        </footer>
    `;

    footerContainer.innerHTML = footerHTML;
}

// ====================
// FUNÇÃO: OBTER PÁGINA ATUAL
// ====================
function getCurrentPage() {
    const path = window.location.pathname;
    // Retira a barra inicial se existir
    return path === '/' ? '/' : path;
}

// ====================
// FUNÇÃO: VERIFICAR SE LINK ESTÁ ATIVO
// ====================
function isLinkActive(href, currentPage) {
    // Comparações especiais para página inicial
    if ((href === '/' || href === 'https://www.uxbrasilia.com.br') && 
        (currentPage === '/' || currentPage === '/index.html')) {
        return true;
    }

    // Comparação normal de caminhos
    return currentPage.includes(href.replace(/^\//, ''));
}

// ====================
// FUNÇÃO: EVENT LISTENERS DO MENU
// ====================
function attachMenuEventListeners() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.getElementById('menu-links');
    const navLinks = document.querySelectorAll('.nav__links a');

    if (!menuToggle) return;

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ====================
// INICIALIZAÇÃO
// ====================
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    renderFooter();
});

// Reexportar para acesso externo se necessário
window.menuFooter = {
    updateConfig: (type, newConfig) => {
        if (type === 'menu') {
            Object.assign(menuConfig, newConfig);
            renderMenu();
        } else if (type === 'footer') {
            Object.assign(footerConfig, newConfig);
            renderFooter();
        }
    },
    getConfig: (type) => {
        return type === 'menu' ? menuConfig : footerConfig;
    }
};
