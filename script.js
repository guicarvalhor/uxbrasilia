
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


 const databaseId = "25dd872b-594c-804f-817c-0037079730f6"; 
    const notionToken = "Ssecret_A0H8EooSifEIZVq5u09dki6NUQ3HJwwXcujZ09uGdyd"; 

    async function getPosts() {
      const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${notionToken}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      console.log(data); // para testar no console
      
      const postsDiv = document.getElementById("posts");
      data.results.forEach(page => {
        const title = page.properties.Name?.title[0]?.plain_text || "Sem título";
        const post = document.createElement("p");
        post.textContent = title;
        postsDiv.appendChild(post);
      });
    }

    getPosts();

    let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;

function showSlide(index) {
  const slidesContainer = document.querySelector(".slides");
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  
  currentIndex = index;
}

// Passar automaticamente
setInterval(() => {
  let nextIndex = (currentIndex + 1) % totalSlides;
  showSlide(nextIndex);
}, 5000);

// Navegação manual pelas bolinhas
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    let index = parseInt(dot.getAttribute("data-slide"));
    showSlide(index);
  });
});
