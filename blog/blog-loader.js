// Sistema de publicação de blog - Carregador da lista de posts
const POSTS_PER_PAGE = 4;
const ALL_CATEGORY = 'Todos';

async function loadBlogPosts() {
  try {
    const response = await fetch('/blog/posts.json');
    const posts = await response.json();

    const params = new URLSearchParams(window.location.search);
    const activeCategory = params.get('category') || ALL_CATEGORY;
    const activePage = Math.max(1, parseInt(params.get('page') || '1', 10));

    renderCategoryFilters(posts, activeCategory);

    const filteredPosts = activeCategory === ALL_CATEGORY
      ? posts
      : posts.filter(post => post.category === activeCategory);

    const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
    const page = Math.min(activePage, totalPages);

    renderPagination(totalPages, page, activeCategory);
    renderPostsPage(filteredPosts, page);
  } catch (error) {
    console.error('Erro ao carregar posts:', error);
  }
}

function renderPostsPage(posts, page) {
  const blogGrid = document.querySelector('.blog-grid');
  if (!blogGrid) return;

  const start = (page - 1) * POSTS_PER_PAGE;
  const pagedPosts = posts.slice(start, start + POSTS_PER_PAGE);

  blogGrid.innerHTML = '';

  if (pagedPosts.length === 0) {
    blogGrid.innerHTML = '<p class="blog-empty">Nenhum post encontrado para esta categoria.</p>';
    return;
  }

  pagedPosts.forEach(post => {
    const postCard = createPostCard(post);
    blogGrid.appendChild(postCard);
  });
}

function renderCategoryFilters(posts, activeCategory) {
  const categories = [ALL_CATEGORY, ...Array.from(new Set(posts.map(post => post.category)))];
  const filtersContainer = document.querySelector('#blog-filters');
  if (!filtersContainer) return;

  filtersContainer.innerHTML = categories.map(category => {
    const activeClass = category === activeCategory ? 'filter-button--active' : '';
    return `<button type="button" class="filter-button ${activeClass}" data-category="${category}">${category}</button>`;
  }).join('');

  filtersContainer.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      updateQueryString(category, 1);
      loadBlogPosts();
    });
  });
}

function renderPagination(totalPages, currentPage, activeCategory) {
  const paginationContainer = document.querySelector('#blog-pagination');
  if (!paginationContainer) return;

  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
    return;
  }

  let html = '<nav class="pagination-nav" aria-label="Paginação de posts">';
  html += `<button type="button" class="pagination-button" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>`;

  for (let page = 1; page <= totalPages; page += 1) {
    const activeClass = page === currentPage ? 'pagination-button--active' : '';
    html += `<button type="button" class="pagination-button ${activeClass}" data-page="${page}">${page}</button>`;
  }

  html += `<button type="button" class="pagination-button" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled' : ''}>Próximo</button>`;
  html += '</nav>';

  paginationContainer.innerHTML = html;
  paginationContainer.querySelectorAll('.pagination-button').forEach(button => {
    button.addEventListener('click', () => {
      if (button.disabled) return;
      const page = Number(button.dataset.page);
      updateQueryString(activeCategory, page);
      loadBlogPosts();
    });
  });
}

function updateQueryString(category, page) {
  const params = new URLSearchParams();
  if (category && category !== ALL_CATEGORY) {
    params.set('category', category);
  }
  if (page > 1) {
    params.set('page', String(page));
  }
  const query = params.toString();
  const url = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  window.history.replaceState({}, '', url);
}

function createPostCard(post) {
  const article = document.createElement('article');
  article.className = 'post-card';
  article.innerHTML = `
    <a href="/blog/post.html?id=${post.id}" class="post-card__image-link">
      <img src="${post.image}"
        alt="${post.imageAlt}"
        class="post-card__image">
    </a>
    <div class="post-card__content">
      <div class="post-card__meta">
        <span class="post-card__category">${post.category}</span>
        <span class="post-card__date">${post.date}</span>
      </div>
      <h3 class="post-card__title">
        <a href="/blog/post.html?id=${post.id}">${post.title}</a>
      </h3>
      <p class="post-card__excerpt">${post.excerpt}</p>
      <a href="/blog/post.html?id=${post.id}" class="post-card__read-more">Ver artigo completo →</a>
    </div>
  `;
  return article;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadBlogPosts);
} else {
  loadBlogPosts();
}
