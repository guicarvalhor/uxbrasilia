// Carrossel de Destaques
class CarouselDestaques {
  constructor() {
    this.currentSlide = 0;
    this.destaques = [];
    this.autoPlayInterval = null;
    this.AUTO_PLAY_DELAY = 4000; // 4 segundos
    this.init();
  }

  async init() {
    try {
      const response = await fetch('/destaques.json');
      this.destaques = await response.json();
      this.destaques = this.destaques.destaques;
      this.render();
      this.setupEventListeners();
      this.startAutoPlay();
    } catch (error) {
      console.error('Erro ao carregar destaques:', error);
    }
  }

  render() {
    const slidesContainer = document.querySelector('.slides');
    const indicatorsContainer = document.querySelector('.indicators');

    if (!slidesContainer || !indicatorsContainer) return;

    // Limpar conteúdo anterior
    slidesContainer.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    // Renderizar slides
    this.destaques.forEach((destaque, index) => {
      const slide = document.createElement('div');
      slide.className = `slide ${index === 0 ? 'active' : ''}`;
      slide.style.backgroundImage = `url('${destaque.image}')`;

      const overlay = document.createElement('div');
      overlay.className = 'overlay';
      overlay.innerHTML = `
        <h3>${destaque.title}</h3>
        <p>${destaque.description}</p>
        <a href="${destaque.link}" target="_blank" class="btn btn--ghost">${destaque.buttonText}</a>
      `;

      slide.appendChild(overlay);
      slidesContainer.appendChild(slide);

      // Renderizar indicadores (barras de progresso)
      const bar = document.createElement('div');
      bar.className = `progress-bar ${index === 0 ? 'active' : ''}`;
      bar.dataset.slide = index;
      bar.addEventListener('click', () => this.goToSlide(index));
      indicatorsContainer.appendChild(bar);
    });
  }

  setupEventListeners() {
    const prevBtn = document.querySelector('.carousel-nav__prev');
    const nextBtn = document.querySelector('.carousel-nav__next');

    if (prevBtn) prevBtn.addEventListener('click', () => this.handleManualNav('prev'));
    if (nextBtn) nextBtn.addEventListener('click', () => this.handleManualNav('next'));

    // Pausar auto-play ao interagir com o carrossel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
      carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
  }

  handleManualNav(direction) {
    this.stopAutoPlay();
    if (direction === 'prev') {
      this.prevSlide();
    } else {
      this.nextSlide();
    }
    this.startAutoPlay();
  }

  updateSlide() {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const bars = document.querySelectorAll('.progress-bar');

    // Atualizar posição do carrossel
    slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;

    // Atualizar barras de progresso
    bars.forEach((bar, index) => {
      bar.classList.toggle('active', index === this.currentSlide);
    });

    // Atualizar slides
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === this.currentSlide);
    });

    // Reiniciar a animação de progresso
    this.resetProgressAnimation();
  }

  resetProgressAnimation() {
    const activeBar = document.querySelector('.progress-bar.active');
    if (activeBar) {
      // Forçar re-flow para reiniciar a animação
      activeBar.style.animation = 'none';
      setTimeout(() => {
        activeBar.style.animation = '';
      }, 10);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.destaques.length;
    this.updateSlide();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.destaques.length) % this.destaques.length;
    this.updateSlide();
  }

  goToSlide(index) {
    this.stopAutoPlay();
    this.currentSlide = index;
    this.updateSlide();
    this.startAutoPlay();
  }

  startAutoPlay() {
    if (this.autoPlayInterval) return;
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.AUTO_PLAY_DELAY);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// Inicializar ao carregar o DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new CarouselDestaques();
  });
} else {
  new CarouselDestaques();
}
