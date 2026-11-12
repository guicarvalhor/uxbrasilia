import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  blogPostsData,
  extractPostHeadings,
  getReadingTimeMinutes,
  slugifyHeading,
} from '../data/posts';

interface BlogPostPageProps {
  postId: string;
  onNavigate: (path: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId, onNavigate }) => {
  const post = useMemo(
    () => blogPostsData.find((p) => p.id === postId || p.slug === postId) || blogPostsData[0],
    [postId]
  );

  const currentIndex = blogPostsData.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : null;

  const readingMinutes = useMemo(() => getReadingTimeMinutes(post), [post]);
  const headings = useMemo(() => extractPostHeadings(post), [post]);
  const showToc = headings.length >= 2;

  const [readProgress, setReadProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const articleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setCopied(false);
  }, [post.id]);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const articleEl = articleRef.current;
      if (!articleEl) {
        setReadProgress(0);
        return;
      }

      const rect = articleEl.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const articleTop = scrollTop + rect.top;
      const totalDistance = Math.max(1, articleEl.offsetHeight - window.innerHeight * 0.65);
      const current = scrollTop - articleTop + window.innerHeight * 0.25;
      const clamped = Math.min(1, Math.max(0, current / totalDistance));
      setReadProgress(clamped);
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [post.id]);

  const handleCopyLink = async () => {
    const shareUrl = `${window.location.origin}/blog/${post.slug}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch {
      const tempInput = document.createElement('input');
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      setCopied(true);
    }
    window.setTimeout(() => setCopied(false), 2600);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate(path);
  };

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState({}, '', `#${targetId}`);
    }
  };

  const injectHtmlHeadingIds = (html: string) => {
    const counts = new Map<string, number>();
    let h2Index = 0;

    return html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (full, attrs: string, inner: string) => {
      if (/\bid\s*=/.test(attrs)) return full;
      h2Index += 1;
      const clean = inner.replace(/<[^>]+>/g, '').trim();
      const base = slugifyHeading(clean) || `secao-${h2Index}`;
      const seen = counts.get(base) ?? 0;
      counts.set(base, seen + 1);
      const id = seen === 0 ? base : `${base}-${seen + 1}`;
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    });
  };

  // Markdown renderer with multi-line HTML block buffering and heading IDs for TOC
  const renderMarkdown = (text: string) => {
    const lines = text.split(/\r?\n/);
    const elements: React.ReactNode[] = [];
    let listBuffer: string[] = [];
    let htmlBuffer: string[] = [];
    let htmlDepth = 0;
    const headingCounts = new Map<string, number>();
    let h2Index = 0;

    const getHeadingId = (rawText: string) => {
      h2Index += 1;
      const clean = rawText
        .replace(/<[^>]+>/g, '')
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .trim();
      const base = slugifyHeading(clean) || `secao-${h2Index}`;
      const seen = headingCounts.get(base) ?? 0;
      headingCounts.set(base, seen + 1);
      return seen === 0 ? base : `${base}-${seen + 1}`;
    };

    const inlineMarkdown = (str: string) => {
      return str
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, url: string) => {
          const isExternal = /^https?:\/\//i.test(url);
          return isExternal
            ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
            : `<a href="${url}">${label}</a>`;
        });
    };

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

    const flushHtml = () => {
      if (htmlBuffer.length > 0) {
        elements.push(
          <div
            key={`html-${elements.length}`}
            dangerouslySetInnerHTML={{ __html: htmlBuffer.join('\n') }}
          />
        );
        htmlBuffer = [];
        htmlDepth = 0;
      }
    };

    const countHtmlDepthDelta = (raw: string) => {
      const voidTags = new Set([
        'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
        'link', 'meta', 'param', 'source', 'track', 'wbr',
      ]);
      const tagRegex = /<\/?([a-zA-Z0-9-]+)(?:\s[^>]*)?(\/?)>/g;
      let delta = 0;
      let match: RegExpExecArray | null;
      while ((match = tagRegex.exec(raw)) !== null) {
        const full = match[0];
        const tagName = match[1].toLowerCase();
        const selfClosing = match[2] === '/' || voidTags.has(tagName);
        if (full.startsWith('</')) {
          delta -= 1;
        } else if (!selfClosing) {
          delta += 1;
        }
      }
      return delta;
    };

    lines.forEach((rawLine, idx) => {
      const line = rawLine.trim();

      if (htmlBuffer.length > 0) {
        if (!line && htmlDepth <= 0) {
          flushHtml();
          return;
        }
        htmlBuffer.push(rawLine);
        htmlDepth += countHtmlDepthDelta(rawLine);
        if (htmlDepth <= 0) {
          flushHtml();
        }
        return;
      }

      if (!line) {
        flushList();
        return;
      }

      if (line.startsWith('<')) {
        flushList();
        htmlBuffer.push(rawLine);
        htmlDepth += countHtmlDepthDelta(rawLine);
        if (htmlDepth <= 0) {
          flushHtml();
        }
        return;
      }

      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={idx} dangerouslySetInnerHTML={{ __html: inlineMarkdown(line.slice(4)) }} />
        );
        return;
      }

      if (line.startsWith('## ')) {
        flushList();
        const headingRaw = line.slice(3);
        const headingId = getHeadingId(headingRaw);
        elements.push(
          <h2
            key={idx}
            id={headingId}
            dangerouslySetInnerHTML={{ __html: inlineMarkdown(headingRaw) }}
          />
        );
        return;
      }

      if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={idx} dangerouslySetInnerHTML={{ __html: inlineMarkdown(line.slice(2)) }} />
        );
        return;
      }

      if (line.startsWith('- ') || line.startsWith('* ')) {
        listBuffer.push(line.slice(2));
        return;
      }

      if (line.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote
            key={idx}
            dangerouslySetInnerHTML={{ __html: inlineMarkdown(line.slice(2)) }}
          />
        );
        return;
      }

      flushList();
      elements.push(
        <p key={idx} dangerouslySetInnerHTML={{ __html: inlineMarkdown(line) }} />
      );
    });

    flushList();
    flushHtml();
    return elements;
  };

  const handleArticleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement | null;
    const anchor = target?.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <>
      <div
        className="blog-reading-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${readProgress})` }}
      />

      <main className="blog-post-main">
        <div className="blog-post-container">
          <div className="blog-post-topbar">
            <a
              href="/blog"
              className="blog-back-link"
              onClick={(e) => handleLinkClick(e, '/blog')}
            >
              <span aria-hidden="true">←</span>
              <span>Voltar para o blog</span>
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className={`blog-copy-btn ${copied ? 'blog-copy-btn--copied' : ''}`}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Link copiado!</span>
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span>Copiar link</span>
                </>
              )}
            </button>
          </div>

          <header className="post-header">
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes} min de leitura</span>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-subtitle">{post.subtitle}</p>
          </header>

          <figure className="post-figure">
            <img
              src={post.image}
              alt={post.imageAlt}
              referrerPolicy="no-referrer"
            />
          </figure>

          {showToc && (
            <details className="blog-toc-mobile">
              <summary className="blog-toc-mobile__summary">
                <span>Neste artigo ({headings.length} seções)</span>
                <span aria-hidden="true">▾</span>
              </summary>
              <nav aria-label="Índice do artigo">
                <ul className="blog-toc__list">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="blog-toc__link"
                        onClick={(e) => handleTocClick(e, h.id)}
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
          )}

          <div
            className={`blog-post-shell ${showToc ? 'blog-post-shell--with-toc' : ''}`}
          >
            <article
              ref={articleRef}
              className="post-content"
              onClick={handleArticleClick}
            >
              {post.format === 'html' ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: injectHtmlHeadingIds(post.contentBody || ''),
                  }}
                />
              ) : (
                renderMarkdown(post.contentBody || '')
              )}
            </article>

            {showToc && (
              <aside className="blog-toc-desktop" aria-label="Neste artigo">
                <p className="blog-toc__title">Neste artigo</p>
                <nav>
                  <ul className="blog-toc__list">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="blog-toc__link"
                          onClick={(e) => handleTocClick(e, h.id)}
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}
          </div>

          <nav className="post-nav-grid" aria-label="Navegação entre artigos">
            {prevPost ? (
              <a
                href={`/blog?id=${prevPost.id}`}
                className="post-nav-card"
                onClick={(e) => handleLinkClick(e, `/blog?id=${prevPost.id}`)}
              >
                <span className="post-nav-card__label">← Artigo anterior</span>
                <strong className="post-nav-card__title">{prevPost.title}</strong>
              </a>
            ) : (
              <div />
            )}

            {nextPost ? (
              <a
                href={`/blog?id=${nextPost.id}`}
                className="post-nav-card post-nav-card--next"
                onClick={(e) => handleLinkClick(e, `/blog?id=${nextPost.id}`)}
              >
                <span className="post-nav-card__label">Próximo artigo →</span>
                <strong className="post-nav-card__title">{nextPost.title}</strong>
              </a>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </main>
    </>
  );
};
