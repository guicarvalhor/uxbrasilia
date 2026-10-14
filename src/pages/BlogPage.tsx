import React, { useState } from 'react';
import { blogPostsData } from '../data/posts';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', ...Array.from(new Set(blogPostsData.map((p) => p.category)))];

  const filteredPosts =
    selectedCategory === 'Todos'
      ? blogPostsData
      : blogPostsData.filter((p) => p.category === selectedCategory);

  return (
    <main>
      <section id="hero-voluntariado" className="hero" style={{ background: 'var(--yellow-700)' }}>
        <div className="hero__bg">
          <div className="rings rings--1"></div>
          <div className="rings rings--2"></div>
          <div className="rings rings--3"></div>
          <div className="rings rings--4"></div>
          <div className="rings rings--5"></div>
        </div>

        <div className="container hero__content-pink">
          <h1 className="hero__title">Blog da Comunidade</h1>
          <p className="hero__desc">
            Artigos, novidades, reflexões e dicas compartilhadas por quem constrói o UX em Brasília.
          </p>
        </div>
      </section>

      <section className="features" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="container">
          {/* Category Filters */}
          <div
            id="blog-filters"
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-button ${selectedCategory === cat ? 'filter-button--active' : ''}`}
                style={{
                  padding: '8px 20px',
                  borderRadius: '99px',
                  border: '1px solid #d1d5db',
                  background: selectedCategory === cat ? 'var(--green)' : '#fff',
                  color: selectedCategory === cat ? '#fff' : 'var(--ink)',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div
            className="blog-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="post-card"
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                  border: '1px solid #f0f0f0',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{ cursor: 'pointer', overflow: 'hidden', height: '220px' }}
                  onClick={() => onNavigate(`/blog?id=${post.id}`)}
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                    <span
                      style={{
                        background: 'rgba(56, 178, 111, 0.12)',
                        color: 'var(--green-600)',
                        padding: '4px 10px',
                        borderRadius: '99px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{post.date}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontSize: '1.3rem',
                      lineHeight: 1.3,
                      margin: '0 0 12px',
                      cursor: 'pointer',
                    }}
                    onClick={() => onNavigate(`/blog?id=${post.id}`)}
                  >
                    {post.title}
                  </h3>

                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <button
                    type="button"
                    onClick={() => onNavigate(`/blog?id=${post.id}`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--green-600)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: 0,
                      marginTop: '16px',
                      textAlign: 'left',
                    }}
                  >
                    Ver artigo completo →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
