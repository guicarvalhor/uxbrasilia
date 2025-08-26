
/* Smooth scroll (Lenis) 
const lenis = new Lenis({
  duration: 1.05,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // easeOutExpo
  smoothWheel: true
});
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

window.addEventListener('scroll', updateNav);*/

/* GSAP: parallax + entrances */
gsap.registerPlugin(ScrollTrigger);

// Hero rings parallax
gsap.to('.rings--1', { y: -40, ease: 'none', scrollTrigger: { scrub: true }});
gsap.to('.rings--2', { y: -60, ease: 'none', scrollTrigger: { scrub: true }});
gsap.to('.rings--3', { y: -80, ease: 'none', scrollTrigger: { scrub: true }});

// Chips + sparks flutuando levemente
gsap.utils.toArray('.chip, .spark').forEach((el, i) => {
  gsap.to(el, {
    y: (i % 2 === 0 ? -8 : 8),
    duration: 2 + Math.random() * 1.5,
    yoyo: true, repeat: -1, ease: 'sine.inOut'
  });
});

// Entradas (reveal) por seção
const revealUp = (targets, delayStep = 0.06) => {
  gsap.set(targets, { y: 24, opacity: 0 });
  gsap.to(targets, {
    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
    stagger: delayStep,
    scrollTrigger: {
      trigger: targets[0] ? targets[0].closest('section, .features, .team, .events') : targets,
      start: 'top 75%',
    }
  });
};

revealUp(gsap.utils.toArray('.feature-card'));
revealUp(gsap.utils.toArray('.team-card'));
revealUp(gsap.utils.toArray('.event-card'));

