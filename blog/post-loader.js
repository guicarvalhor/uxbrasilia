// Sistema de publicação de blog - Carregador de post individual
async function loadPost() {
  try {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');

    if (!postId) {
      window.location.href = '/blog.html';
      return;
    }

    const response = await fetch('/blog/posts.json');
    const posts = await response.json();
    const post = posts.find(p => p.id === postId);

    if (!post) {
      window.location.href = '/blog.html';
      return;
    }

    document.title = `${post.title} — Blog UXBrasília`;
    updateOpenGraph(post);
    renderPostHeader(post);
    renderPostFigure(post);
    await renderPostContent(post);
    updateBackLink();
    renderPostNavigation(posts, postId);
  } catch (error) {
    console.error('Erro ao carregar post:', error);
  }
}

function updateOpenGraph(post) {
  const metaTags = document.head.querySelectorAll('meta[property="og:title"], meta[property="og:description"], meta[property="og:image"]');
  metaTags.forEach(tag => tag.remove());

  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', post.title);
  document.head.appendChild(ogTitle);

  const ogDesc = document.createElement('meta');
  ogDesc.setAttribute('property', 'og:description');
  ogDesc.setAttribute('content', post.subtitle);
  document.head.appendChild(ogDesc);

  const ogImage = document.createElement('meta');
  ogImage.setAttribute('property', 'og:image');
  ogImage.setAttribute('content', post.image);
  document.head.appendChild(ogImage);
}

function renderPostHeader(post) {
  const postHeader = document.querySelector('.post-header');
  if (!postHeader) return;

  postHeader.innerHTML = `
    <div class="post-meta">
      <span class="post-category">${post.category}</span>
      <span class="post-date">${post.date}</span>
    </div>
    <h1 class="post-title">${post.title}</h1>
    <p class="post-subtitle">${post.subtitle}</p>
  `;
}

function renderPostFigure(post) {
  const postFigure = document.querySelector('.post-figure');
  if (!postFigure) return;

  postFigure.innerHTML = `<img src="${post.image}" alt="${post.imageAlt}">`;
}

async function renderPostContent(post) {
  const postContent = document.querySelector('.post-content');
  if (!postContent || !post.content) return;

  try {
    const contentResponse = await fetch(`/${post.content}`);
    if (!contentResponse.ok) return;

    const contentText = await contentResponse.text();
    if (post.format === 'md') {
      postContent.innerHTML = renderMarkdown(contentText);
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(contentText, 'text/html');
    const externalContent = doc.querySelector('.post-content');
    postContent.innerHTML = externalContent ? externalContent.innerHTML : contentText;
  } catch (error) {
    console.error('Erro ao carregar conteúdo do post:', error);
  }
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  let html = '';
  let inList = false;

  const closeList = () => {
    if (inList) {
      html += '</ul>';
      inList = false;
    }
  };

  const inline = text => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  };

  for (let rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeList();
      continue;
    }

    if (line.startsWith('<') && line.endsWith('>')) {
      closeList();
      html += `${line}`;
      continue;
    }

    if (line.startsWith('### ')) {
      closeList();
      html += `<h3>${inline(line.slice(4))}</h3>`;
      continue;
    }

    if (line.startsWith('## ')) {
      closeList();
      html += `<h2>${inline(line.slice(3))}</h2>`;
      continue;
    }

    if (line.startsWith('# ')) {
      closeList();
      html += `<h1>${inline(line.slice(2))}</h1>`;
      continue;
    }

    if (/^[\-*+]\s+/.test(line)) {
      if (!inList) {
        inList = true;
        html += '<ul>';
      }
      html += `<li>${inline(line.replace(/^[\-*+]\s+/, ''))}</li>`;
      continue;
    }

    if (line.startsWith('> ')) {
      closeList();
      html += `<blockquote>${inline(line.slice(2))}</blockquote>`;
      continue;
    }

    html += `<p>${inline(line)}</p>`;
  }

  closeList();
  return html;
}

function updateBackLink() {
  const backLink = document.querySelector('.back-to-blog');
  if (backLink) {
    backLink.href = '/blog.html';
  }
}

function renderPostNavigation(posts, currentPostId) {
  const currentIndex = posts.findIndex(p => p.id === currentPostId);
  if (currentIndex === -1) return;

  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  let navContainer = document.querySelector('.post-navigation');
  if (!navContainer) {
    const postFooter = document.querySelector('.post-footer');
    if (postFooter) {
      navContainer = document.createElement('nav');
      navContainer.className = 'post-navigation';
      postFooter.parentNode.insertBefore(navContainer, postFooter);
    } else {
      return;
    }
  }

  let navHTML = '<div class="post-navigation__items">';

  if (previousPost) {
    navHTML += `
      <a href="/blog/post.html?id=${previousPost.id}" class="post-navigation__item post-navigation__item--prev">
        <span class="post-navigation__label">Artigo anterior</span>
        <span class="post-navigation__title">${previousPost.title}</span>
      </a>
    `;
  } else {
    navHTML += '<div class="post-navigation__item post-navigation__item--empty"></div>';
  }

  if (nextPost) {
    navHTML += `
      <a href="/blog/post.html?id=${nextPost.id}" class="post-navigation__item post-navigation__item--next">
        <span class="post-navigation__label">Próximo artigo</span>
        <span class="post-navigation__title">${nextPost.title}</span>
      </a>
    `;
  } else {
    navHTML += '<div class="post-navigation__item post-navigation__item--empty"></div>';
  }

  navHTML += '</div>';
  navContainer.innerHTML = navHTML;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPost);
} else {
  loadPost();
}
