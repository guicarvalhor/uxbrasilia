import React, { useState, useMemo } from 'react';
import { storeProducts, StoreProduct } from '../data/products';

interface ProdutoDetailPageProps {
  productId: string;
  onNavigate: (path: string) => void;
}

export const ProdutoDetailPage: React.FC<ProdutoDetailPageProps> = ({ productId, onNavigate }) => {
  const product: StoreProduct | undefined = storeProducts[productId] || storeProducts['camiseta-cafe-uxui'];

  // Media gallery items
  const galleryItems = useMemo(() => {
    if (product.gallery && product.gallery.length > 0) {
      return product.gallery;
    }
    // Otherwise construct from images
    const items: Array<{ type: 'image' | 'video'; src: string; thumb: string }> = [];
    Object.values(product.images).forEach((img) => {
      items.push({ type: 'image', src: img.main, thumb: img.thumb });
    });
    if (items.length === 0) {
      items.push({ type: 'image', src: product.defaultImage, thumb: product.defaultImage });
    }
    return items;
  }, [product]);

  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  // Attributes
  const attributeKeys = useMemo(() => {
    if (!product.variations.length) return [];
    return Object.keys(product.variations[0].attributes);
  }, [product]);

  // Initial selected attributes
  const [selectedAttributes, setSelectedAttributes] = useState<Record<string, string>>(() => {
    if (!product.variations.length) return {};
    return { ...product.variations[0].attributes };
  });

  // Modal / Drawer state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  // Current variation
  const currentVariation = useMemo(() => {
    return product.variations.find((v) =>
      Object.entries(selectedAttributes).every(([key, val]) => v.attributes[key] === val)
    ) || product.variations[0];
  }, [product, selectedAttributes]);

  const currentPrice = currentVariation ? currentVariation.price : product.variations[0]?.price || 0;
  const isOutOfStock = currentVariation ? currentVariation.stock <= 0 : false;

  const handleAttributeSelect = (attrKey: string, value: string) => {
    const updated = { ...selectedAttributes, [attrKey]: value };

    // If changing an attribute and resulting combination doesn't exist, find closest variation
    const exists = product.variations.some((v) =>
      Object.entries(updated).every(([k, val]) => v.attributes[k] === val)
    );

    if (!exists) {
      const match = product.variations.find((v) => v.attributes[attrKey] === value);
      if (match) {
        setSelectedAttributes({ ...match.attributes });
        return;
      }
    }

    setSelectedAttributes(updated);

    // If changing color, update main image if available
    if (attrKey === 'Cor' && product.images[value]) {
      const imgObj = product.images[value];
      const foundIdx = galleryItems.findIndex((g) => g.src === imgObj.main);
      if (foundIdx !== -1) {
        setSelectedMediaIndex(foundIdx);
      }
    }
  };

  const getAvailableValuesFor = (attrKey: string) => {
    const values = new Set<string>();
    product.variations.forEach((v) => {
      values.add(v.attributes[attrKey]);
    });
    return Array.from(values);
  };

  const pixKey = 'uxbrasilia.comunidade@gmail.com';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const generateWhatsappText = () => {
    const attrs = Object.entries(selectedAttributes)
      .map(([k, v]) => `${k}: ${v}`)
      .join(', ');
    const text = `Olá! Tenho interesse no produto *${product.name}* (${attrs}) por R$ ${currentPrice.toFixed(2).replace('.', ',')}. Como faço para combinar?`;
    return encodeURIComponent(text);
  };

  const currentMedia = galleryItems[selectedMediaIndex] || galleryItems[0];

  return (
    <div className="product-page-wrapper" style={{ minHeight: '100vh', paddingTop: '100px', backgroundColor: 'var(--blue)' }}>
      {/* Breadcrumb */}
      <div className="container" style={{ marginBottom: '20px' }}>
        <nav style={{ color: '#fff', fontSize: '0.9rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            style={{ textDecoration: 'underline' }}
          >
            Início
          </a>
          <span>&gt;</span>
          <a
            href="/catalogo"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/catalogo');
            }}
            style={{ textDecoration: 'underline' }}
          >
            Lojinha
          </a>
          <span>&gt;</span>
          <span style={{ fontWeight: 600 }}>{product.name}</span>
        </nav>
      </div>

      {/* Main product card */}
      <div className="product-container">
        {/* Media Column */}
        <div className="product-image-gallery">
          <div className="product-media-viewer">
            {currentMedia?.type === 'video' ? (
              <video
                src={currentMedia.src}
                controls
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', borderRadius: '12px', maxHeight: '420px', backgroundColor: '#000' }}
              />
            ) : (
              <img
                src={currentMedia?.src || product.defaultImage}
                alt={product.name}
                style={{ width: '100%', borderRadius: '12px', maxHeight: '420px', objectFit: 'contain' }}
              />
            )}
          </div>

          {/* Thumbnails */}
          {galleryItems.length > 1 && (
            <div className="product-gallery-thumbs">
              {galleryItems.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`product-thumbnail ${idx === selectedMediaIndex ? 'active' : ''}`}
                  onClick={() => setSelectedMediaIndex(idx)}
                  style={{
                    border: idx === selectedMediaIndex ? '2px solid var(--blue)' : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  <img src={item.thumb} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Column */}
        <div className="product-details">
          <h1
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontSize: '2rem',
              margin: '0 0 12px',
              color: 'var(--ink)',
            }}
          >
            {product.name}
          </h1>

          <div
            style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--green-600)',
              marginBottom: '16px',
            }}
          >
            R$ {currentPrice.toFixed(2).replace('.', ',')}
          </div>

          <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: '24px' }}>
            {product.description}
          </p>

          {/* Option groups */}
          <div id="product-options-container" style={{ marginBottom: '24px' }}>
            {attributeKeys.map((attrKey) => {
              const values = getAvailableValuesFor(attrKey);
              return (
                <div key={attrKey} style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' }}>
                    {attrKey}:
                  </label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {values.map((val) => {
                      const isSelected = selectedAttributes[attrKey] === val;
                      return (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleAttributeSelect(attrKey, val)}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: isSelected ? '2px solid var(--blue)' : '1px solid #d1d5db',
                            background: isSelected ? '#eff6ff' : '#fff',
                            color: isSelected ? 'var(--blue)' : 'var(--ink)',
                            fontWeight: isSelected ? 700 : 500,
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                          }}
                        >
                          {val}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stock status indicator */}
          <div style={{ marginBottom: '24px' }}>
            {isOutOfStock ? (
              <span
                style={{
                  display: 'inline-block',
                  background: '#fef3c7',
                  color: '#92400e',
                  padding: '6px 14px',
                  borderRadius: '99px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                Disponível sob encomenda / Reserva
              </span>
            ) : (
              <span
                style={{
                  display: 'inline-block',
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '6px 14px',
                  borderRadius: '99px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                ✓ Em estoque
              </span>
            )}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a
              href={`${product.whatsappLink}?text=${generateWhatsappText()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{
                textAlign: 'center',
                backgroundColor: '#25d366',
                borderColor: '#25d366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              Pedir via WhatsApp
            </a>

            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setIsOrderModalOpen(true)}
              style={{ textAlign: 'center' }}
            >
              Pagar com PIX & Detalhes
            </button>

            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--muted)',
                fontSize: '0.85rem',
                textDecoration: 'underline',
                cursor: 'pointer',
                marginTop: '6px',
              }}
            >
              Como funciona a entrega e retiradas?
            </button>
          </div>
        </div>
      </div>

      {/* Modal PIX */}
      {isOrderModalOpen && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOrderModalOpen(false);
          }}
        >
          <div
            className="modal-content"
            style={{
              background: '#fff',
              borderRadius: '24px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.5rem', margin: 0 }}>
                Resumo do Pedido
              </h2>
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <div style={{ background: '#f9fafb', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
              <p style={{ margin: '0 0 6px', fontWeight: 600 }}>{product.name}</p>
              <p style={{ margin: '0 0 6px', fontSize: '0.9rem', color: 'var(--muted)' }}>
                {Object.entries(selectedAttributes).map(([k, v]) => `${k}: ${v}`).join(' | ')}
              </p>
              <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: 'var(--green-600)' }}>
                Total: R$ {currentPrice.toFixed(2).replace('.', ',')}
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', marginBottom: '6px' }}>
                Chave PIX da Comunidade:
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  readOnly
                  value={pixKey}
                  style={{
                    flex: 1,
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #d1d5db',
                    fontSize: '0.9rem',
                    background: '#f3f4f6',
                  }}
                />
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="btn btn--primary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  {copiedPix ? '✓ Copiado!' : 'Copiar Chave'}
                </button>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5, marginBottom: '20px' }}>
              Após realizar o PIX, envie o comprovante e seu endereço/ponto de encontro no WhatsApp da comunidade para confirmarmos seu pedido!
            </p>

            <a
              href={`${product.whatsappLink}?text=${generateWhatsappText()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ width: '100%', textAlign: 'center', display: 'block', backgroundColor: '#25d366' }}
            >
              Enviar comprovante pelo WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Drawer: Como funciona a entrega */}
      {isDrawerOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsDrawerOpen(false);
          }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '24px',
              maxWidth: '560px',
              width: '100%',
              padding: '28px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.4rem', margin: 0 }}>
                Entrega e Retiradas
              </h2>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink)' }}>
              <p>
                <strong>1. Retirada nos encontros presenciais:</strong>
                <br />
                Você pode retirar seus itens gratuitamente durante os eventos e encontros oficiais da UXBrasília.
              </p>
              <p>
                <strong>2. Entrega no Plano Piloto e DF:</strong>
                <br />
                Podemos combinar entrega em estações de metrô ou via aplicativo com taxa a combinar diretamente pelo WhatsApp.
              </p>
              <p>
                <strong>3. Produção sob demanda:</strong>
                <br />
                Camisetas e cobogós que não estiverem em pronta-entrega são produzidos em lotes com prazo médio de 7 a 14 dias úteis.
              </p>
            </div>

            <button
              type="button"
              className="btn btn--primary"
              onClick={() => setIsDrawerOpen(false)}
              style={{ width: '100%', marginTop: '20px' }}
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
