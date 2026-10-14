import React from 'react';
import { BlogPost, blogPostsData } from '../data/posts';

interface BlogPostPageProps {
  postId: string;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId, onNavigate }) => {
  const post = blogPostsData.find((p) => p.id === postId) || blogPostsData[0];

  const currentIndex = blogPostsData.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : null;

  // Simple Markdown renderer
  const renderMarkdown = (text: string) => {
    const lines = text.split(/\r?\n/);
    const elements: React.ReactNode[] = [];
    let listBuffer: string[] = [];

    const flushList = () => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`}>
            {listBuffer.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: inlineMarkdown(item) }} />
            ))}
          </ul>
        );
        listBuffer = [];
      }
    };

    const inlineMarkdown = (str: string) => {
      return str
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    };

    lines.forEach((rawLine, idx) => {
      const line = rawLine.trim();
      if (!line) {
        flushList();
        return;
      }

      if (line.startsWith('<div') || line.startsWith('</div') || line.startsWith('<a') || line.startsWith('<svg')) {
        flushList();
        elements.push(<div key={idx} dangerouslySetInnerHTML={{ __html: rawLine }} />);
        return;
      }

      if (line.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={idx}>{line.slice(4)}</h3>);
        return;
      }

      if (line.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={idx}>{line.slice(3)}</h2>);
        return;
      }

      if (line.startsWith('# ')) {
        flushList();
        elements.push(<h1 key={idx}>{line.slice(2)}</h1>);
        return;
      }

      if (line.startsWith('- ') || line.startsWith('* ')) {
        listBuffer.push(line.slice(2));
        return;
      }

      if (line.startsWith('> ')) {
        flushList();
        elements.push(<blockquote key={idx}>{line.slice(2)}</blockquote>);
        return;
      }

      flushList();
      elements.push(
        <p key={idx} dangerouslySetInnerHTML={{ __html: inlineMarkdown(line) }} />
      );
    });

    flushList();
    return elements;
  };

  return (
    <main style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '840px', margin: '0 auto', padding: '20px' }}>
        <button
          type="button"
          onClick={() => onNavigate('/blog')}
          className="btn btn--ghost"
          style={{ marginBottom: '32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          ← Voltar para o blog
        </button>

        <header className="post-header" style={{ marginBottom: '32px' }}>
          <div className="post-meta" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
            <span
              className="badge"
              style={{ background: 'var(--green)', color: '#fff', padding: '4px 12px', borderRadius: '16px', fontSize: '0.85rem' }}
            >
              {post.category}
            </span>
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{post.date}</span>
          </div>
          <h1
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
              margin: '0 0 16px',
            }}
          >
            {post.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--muted)', lineHeight: 1.6 }}>{post.subtitle}</p>
        </header>

        <figure className="post-figure" style={{ margin: '0 0 40px', borderRadius: '20px', overflow: 'hidden' }}>
          <img src={post.image} alt={post.imageAlt} style={{ width: '100%', maxHeight: '460px', objectFit: 'cover' }} />
        </figure>

        <article className="post-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1f2937' }}>
          {post.format === 'html' ? (
            <div dangerouslySetInnerHTML={{ __html: post.contentBody || '' }} />
          ) : (
            renderMarkdown(post.contentBody || '')
          )}
        </article>

        {/* Post navigation */}
        <nav
          className="post-navigation"
          style={{
            marginTop: '60px',
            paddingTop: '30px',
            borderTop: '1px solid #e5e7eb',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          }}
        >
          {prevPost ? (
            <div
              onClick={() => onNavigate(`/blog?id=${prevPost.id}`)}
              style={{
                cursor: 'pointer',
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                transition: 'border-color 0.2s',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>
                ← Artigo anterior
              </span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{prevPost.title}</strong>
            </div>
          ) : <div />}

          {nextPost ? (
            <div
              onClick={() => onNavigate(`/blog?id=${nextPost.id}`)}
              style={{
                cursor: 'pointer',
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                textAlign: 'right',
                transition: 'border-color 0.2s',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>
                Próximo artigo →
              </span>
              <strong style={{ fontSize: '0.95rem', color: 'var(--ink)' }}>{nextPost.title}</strong>
            </div>
          ) : <div />}
        </nav>
      </div>
    </main>
  );
};
