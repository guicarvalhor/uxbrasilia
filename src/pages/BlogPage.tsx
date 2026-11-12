import React, { useMemo, useState } from 'react';
import { blogPostsData, BlogPost, getReadingTimeMinutes } from '../data/posts';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(blogPostsData.map((p) => p.category)))],
    []
  );

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Todos' || post.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = `${post.title} ${post.subtitle} ${post.excerpt} ${post.category}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [selectedCategory, normalizedQuery]);

  const showLeadStory =
    selectedCategory === 'Todos' && !normalizedQuery && filteredPosts.length > 1;
  const featuredPost = showLeadStory ? filteredPosts[0] : null;
  const gridPosts = showLeadStory ? filteredPosts.slice(1) : filteredPosts;

  const hasActiveFilters = selectedCategory !== 'Todos' || normalizedQuery.length > 0;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate(path);
  };

  const resetFilters = () => {
    setSelectedCategory('Todos');
    setSearchQuery('');
  };

  const renderMetaLine = (post: BlogPost) => {
    const minutes = getReadingTimeMinutes(post);
    return (
      <div className="blog-meta-line">
        <span className="blog-meta-line__cat">{post.category}</span>
        <span className="blog-meta-line__sep" aria-hidden="true">·</span>
        <span>{post.date}</span>
        <span className="blog-meta-line__sep" aria-hidden="true">·</span>
        <span>{minutes} min de leitura</span>
      </div>
    );
  };

  return (
    <main>
      <section id="hero-blog" className="hero blog-hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="rings rings--1"></div>
          <div className="rings rings--2"></div>
          <div className="rings rings--3"></div>
          <div className="rings rings--4"></div>
          <div className="rings rings--5"></div>
        </div>

        <div className="container blog-hero__content">
          <h1 className="hero__title">Blog da Comunidade</h1>
          <p className="hero__desc">
            Artigos, guias de carreira, memórias dos encontros e aprendizados compartilhados por quem constrói o design de produto no DF.
          </p>
        </div>
      </section>

      <section className="blog-main-section" aria-label="Lista de artigos">
        <div className="container">
          <div className="blog-toolbar">
            <div
              id="blog-filters"
              className="blog-filters"
              role="tablist"
              aria-label="Filtrar artigos por categoria"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`filter-button ${isActive ? 'filter-button--active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="blog-search">
              <span className="blog-search__icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="search"
                className="blog-search__input"
                placeholder="Buscar por tema ou título..."
                aria-label="Buscar artigos no blog"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="blog-search__clear"
                  aria-label="Limpar busca"
                  onClick={() => setSearchQuery('')}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="blog-results-bar" aria-live="polite">
            <span>
              {filteredPosts.length === 1
                ? '1 artigo encontrado'
                : `${filteredPosts.length} artigos encontrados`}
              {selectedCategory !== 'Todos' ? ` em ${selectedCategory}` : ''}
              {normalizedQuery ? ` para "${searchQuery.trim()}"` : ''}
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                className="blog-results-reset"
                onClick={resetFilters}
              >
                Limpar filtros
              </button>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="blog-empty">
              <h2 className="blog-empty__title">Nenhum artigo encontrado</h2>
              <p className="blog-empty__desc">
                Tente buscar por outra palavra-chave ou volte para todas as categorias.
              </p>
              <button
                type="button"
                className="filter-button filter-button--active"
                onClick={resetFilters}
              >
                Ver todos os artigos
              </button>
            </div>
          ) : (
            <>
              {featuredPost && (
                <article className="blog-featured">
                  <div className="blog-featured__media">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.imageAlt}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="blog-featured__body">
                    <span className="blog-featured__eyebrow">Destaque recente</span>
                    {renderMetaLine(featuredPost)}
                    <h2 className="blog-featured__title">
                      <a
                        href={`/blog?id=${featuredPost.id}`}
                        className="blog-card__stretched-link"
                        onClick={(e) => handleLinkClick(e, `/blog?id=${featuredPost.id}`)}
                      >
                        {featuredPost.title}
                      </a>
                    </h2>
                    <p className="blog-featured__excerpt">{featuredPost.excerpt}</p>
                    <span className="blog-card__cta" aria-hidden="true">
                      Ler artigo completo →
                    </span>
                  </div>
                </article>
              )}

              {gridPosts.length > 0 && (
                <div className="blog-grid">
                  {gridPosts.map((post) => (
                    <article key={post.id} className="blog-card">
                      <div className="blog-card__media">
                        <img
                          src={post.image}
                          alt={post.imageAlt}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="blog-card__body">
                        {renderMetaLine(post)}
                        <h3 className="blog-card__title">
                          <a
                            href={`/blog?id=${post.id}`}
                            className="blog-card__stretched-link"
                            onClick={(e) => handleLinkClick(e, `/blog?id=${post.id}`)}
                          >
                            {post.title}
                          </a>
                        </h3>
                        <p className="blog-card__excerpt">{post.excerpt}</p>
                        <span className="blog-card__cta" aria-hidden="true">
                          Ler artigo →
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};
