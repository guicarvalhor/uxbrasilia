# 📋 Sistema de Gestão de Destaques

## Como Usar

O sistema de destaques foi reformulado para facilitar a adição de novos itens. Agora você só precisa editar um arquivo JSON!

### 📁 Arquivos Principais

- **`destaques.json`** — Arquivo com todos os dados dos destaques (editar aqui!)
- **`carousel-loader.js`** — Script que lê o JSON e renderiza o carrossel
- **`index.html`** — Página principal (carrossel vazio que será preenchido dinamicamente)

---

## 🆕 Adicionando Novos Destaques

Abra o arquivo `destaques.json` e adicione um novo objeto no array `destaques`:

### Estrutura de um Destaque

```json
{
  "image": "/assets/img1.png",
  "title": "Título do destaque",
  "description": "Descrição breve",
  "link": "url-do-link",
  "buttonText": "Texto do botão"
}
```

### 📋 Propriedades

| Propriedade | Tipo | Descrição |
|------------|------|-----------|
| `image` | string | Caminho da imagem (ex: `/assets/img1.png`) |
| `title` | string | Título do destaque |
| `description` | string | Descrição breve |
| `link` | string | URL do link (interna ou externa) |
| `buttonText` | string | Texto exibido no botão |

---

## 🎯 Exemplos

### Destaque com Link Externo
```json
{
  "image": "/assets/img1.png",
  "title": "Comunidade UXBrasília",
  "description": "Junte-se aos designers de Brasília",
  "link": "https://chat.whatsapp.com/...",
  "buttonText": "Entrar na comunidade"
}
```

### Destaque com Link Interno
```json
{
  "image": "/assets/img2.png",
  "title": "Nossa Lojinha",
  "description": "Produtos exclusivos da comunidade",
  "link": "/loja/catalogo.html",
  "buttonText": "Conferir produtos"
}
```

### Destaque com Âncora
```json
{
  "image": "/assets/img3.png",
  "title": "Próximos Eventos",
  "description": "Veja nossa agenda de 2026",
  "link": "#eventos",
  "buttonText": "Ver eventos"
}
```

---

## 🎨 Controles do Carrossel

### Navegação
- **Botões com setas** (canto superior direito): `← →` para navegar
- **Pontos indicadores** (base do carrossel): Clique para ir direto a um slide

### Responsivo
O carrossel se adapta automaticamente a diferentes tamanhos de tela.

---

## 📋 Checklist para Adicionar um Novo Destaque

- [ ] Prepare uma imagem (recomendado: 1200x400px)
- [ ] Salve a imagem em `/assets/`
- [ ] Abra o arquivo `destaques.json`
- [ ] Adicione o novo objeto ao array `destaques`
- [ ] Preencha `image` com o caminho da imagem
- [ ] Escreva o `title` do destaque
- [ ] Escreva a `description` (breve e atrativa)
- [ ] Cole a `link` (URL completa ou caminho relativo)
- [ ] Defina o `buttonText` (ex: "Ver mais", "Saiba mais", etc.)
- [ ] Salve o arquivo `destaques.json`
- [ ] A página atualizará automaticamente!

---

## 🚀 Pronto!

Os destaques aparecerão no carrossel na ordem que você definir no JSON. Use os botões com setas para navegar ou clique nos indicadores na base!

**Dica:** Os primeiros destaques aparecem primeiro. Você pode reordenar o array para mudar a sequência.
