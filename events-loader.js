// Carrega eventos do JSON e renderiza os cards
async function loadAndRenderEvents() {
  try {
    const response = await fetch('/events.json');
    const eventsData = await response.json();
    
    const container = document.querySelector('.events__grid');
    if (!container) return;
    
    // Limpar conteúdo anterior
    container.innerHTML = '';
    
    // Processar anos em ordem decrescente
    const years = Object.keys(eventsData).sort((a, b) => b - a);
    
    years.forEach(year => {
      // Adicionar título do ano
      const yearTitle = document.createElement('div');
      yearTitle.className = 'events__year-title';
      yearTitle.textContent = year;
      container.appendChild(yearTitle);
      
      // Adicionar eventos do ano
      const events = eventsData[year];
      events.forEach(event => {
        const card = createEventCard(event);
        container.appendChild(card);
      });
    });
    
  } catch (error) {
    console.error('Erro ao carregar eventos:', error);
  }
}

// Cria um card de evento
function createEventCard(event) {
  const article = document.createElement('article');
  article.className = `event-card event-card--${event.color}`;
  
  // Meta (data e status)
  const meta = document.createElement('div');
  meta.className = 'event-card__meta';
  
  const dateSpan = document.createElement('span');
  dateSpan.textContent = event.date;
  meta.appendChild(dateSpan);
  
  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = event.status === 'realizado' ? 'Já realizado' : 'Em breve';
  meta.appendChild(badge);
  
  article.appendChild(meta);
  
  // Título
  const title = document.createElement('h3');
  title.className = 'event-card__title';
  title.textContent = event.title;
  article.appendChild(title);
  
  // Descrição (local + hora)
  const desc = document.createElement('p');
  desc.className = 'event-card__desc';
  let descText = event.local;
  if (event.hora) {
    descText += ` | ${event.hora}`;
  }
  desc.textContent = descText;
  article.appendChild(desc);
  
  // Botão/Link
  if (event.linkType && event.linkUrl) {
    const link = document.createElement('a');
    link.href = event.linkUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    link.className = 'btn btn--small';
    
    // Definir texto do botão baseado no tipo
    if (event.linkType === 'video') {
      link.textContent = 'Ver vídeo';
    } else if (event.linkType === 'photos') {
      link.textContent = 'Ver fotos';
    } else if (event.linkType === 'tickets') {
      link.textContent = 'Ver ingressos';
    } else {
      link.textContent = 'Saiba mais';
    }
    
    article.appendChild(link);
  }
  
  return article;
}

// Executar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadAndRenderEvents);
} else {
  loadAndRenderEvents();
}
