document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navHeader = document.querySelector('.nav');
    const body = document.body;

    if (menuToggle && navHeader) {
        menuToggle.addEventListener('click', () => {
            
            navHeader.classList.toggle('nav--open');
            body.classList.toggle('no-scroll');

            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }
});