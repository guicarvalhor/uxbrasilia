import React, { useState } from 'react';
import { storeProducts, StoreProduct } from '../data/products';

interface CatalogoPageProps {
  onNavigate: (path: string) => void;
}

export const CatalogoPage: React.FC<CatalogoPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'camiseta' | 'caneca' | 'cobogo'>('all');

  const productsList = Object.values(storeProducts);

  const getProductCategory = (id: string) => {
    if (id.includes('camiseta')) return 'camiseta';
    if (id.includes('caneca')) return 'caneca';
    if (id.includes('cobogo')) return 'cobogo';
    return 'all';
  };

  const filteredProducts = productsList.filter((prod) => {
    if (activeCategory === 'all') return true;
    return getProductCategory(prod.id) === activeCategory;
  });

  const getPriceLabel = (prod: StoreProduct) => {
    const prices = prod.variations.map((v) => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    if (minPrice === maxPrice) {
      return `R$ ${minPrice.toFixed(2).replace('.', ',')}`;
    }
    return `A partir de R$ ${minPrice.toFixed(2).replace('.', ',')}`;
  };

  return (
    <main>
      <section className="hero blue" id="hero-voluntariado">
        <div className="hero__bg">
          <div className="rings rings--1"></div>
          <div className="rings rings--2"></div>
          <div className="rings rings--3"></div>
          <div className="rings rings--4"></div>
          <div className="rings rings--5"></div>
        </div>
        <div className="container hero__content">
          <h1 className="hero__title">Leve pra casa um pedaço da comunidade</h1>
          <p className="hero__desc">Produtos feitos com carinho para quem faz parte da UXBrasília.</p>
        </div>
      </section>

      <div className="team" style={{ borderRadius: 0, backgroundColor: 'var(--offwhite)', padding: '60px 0 100px' }}>
        <div className="container">
          <h2 className="section__title" style={{ color: 'var(--blue)', marginBottom: '32px' }}>
            Nossos Produtos
          </h2>

          <div className="catalog-layout">
            <aside className="catalog-filters" id="catalog-filters">
              <div className="catalog-filters-header">
                <h4 className="catalog-filters-title" style={{ margin: '0 0 10px', fontSize: '1rem' }}>
                  Filtre por
                </h4>
                <hr style={{ borderColor: '#e5e7eb', marginBottom: '14px' }} />
              </div>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                Todos
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'camiseta' ? 'active' : ''}`}
                onClick={() => setActiveCategory('camiseta')}
              >
                Camisetas
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'caneca' ? 'active' : ''}`}
                onClick={() => setActiveCategory('caneca')}
              >
                Canecas
              </button>
              <button
                type="button"
                className={`filter-btn ${activeCategory === 'cobogo' ? 'active' : ''}`}
                onClick={() => setActiveCategory('cobogo')}
              >
                Cobogós
              </button>
            </aside>

            <div className="catalog-main">
              <div className="team__grid" id="catalog-grid">
                {filteredProducts.map((prod) => (
                  <figure key={prod.id} className="team-card" style={{ cursor: 'pointer' }}>
                    <div
                      onClick={() => onNavigate(`/loja/produto?id=${prod.id}`)}
                      style={{ overflow: 'hidden', height: '240px' }}
                    >
                      <img
                        src={prod.defaultImage}
                        alt={prod.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <figcaption>
                      <h3>{prod.name}</h3>
                      <p style={{ minHeight: '48px' }}>{prod.description.slice(0, 100)}...</p>
                      <p style={{ fontSize: '24px', padding: '16px 0px', fontWeight: 700 }}>
                        {getPriceLabel(prod)}
                      </p>
                      <button
                        type="button"
                        className="btn btn--ghost full"
                        onClick={() => onNavigate(`/loja/produto?id=${prod.id}`)}
                        style={{ width: '100%' }}
                      >
                        Ver produto &gt;
                      </button>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
