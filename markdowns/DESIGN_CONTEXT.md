# UXBrasília — Contexto de Design do Sistema

## Visão geral

Este sistema visual pertence ao site da comunidade UXBrasília, com foco em acolhimento, comunidade, educação e networking para designers e profissionais de tecnologia no Distrito Federal.

O comportamento visual se baseia em:
- identidade acessível e amigável
- linguagem editorial forte com títulos expressivos
- cards com personalidade e movimento leve
- uso de blocos de cor para diferenciar áreas e chamar atenção
- navegação envolvente, com destaque para comunidade, eventos, vagas e contato

O site foi construído em HTML/CSS/JS vanilla e usa um estilo híbrido entre:
- editorial + comunidade
- campus/clubhouse + produto digital
- comunicação forte + visual urbano

---

## 1) Objetivo da linguagem visual

A identidade visual comunica:
- acolhimento
- proximidade humana
- energia coletiva
- saber fazer técnico com tom de comunidade
- confiança, pertencimento, colaboração e ação

A mensagem principal é: “a comunidade onde o design é coletivo e a experiência é compartilhada”.

A linguagem deve parecer:
- vibrante, porém confiável
- moderna, sem ser fria
- amigável, mas com presença forte
- construída para conectar pessoas, não apenas vender produtos

---

## 2) Paleta de cores

Tokens principais definidos em CSS:

```css
:root {
  --green: #38b26f;
  --green-600: #2f855a;
  --blue: #2e67ff;
  --blue-900: #1a3fa9;
  --pink: #d83b96;
  --yellow: #f6c446;
  --yellow-700: #E4B30B;
  --yellow-800: #8A6C07;
  --cyan: #3fd7c8;
  --offwhite: #f7f8f7;
  --ink: #0c1110;
  --muted: #5b6e64;
  --white: #ffffff;
}
```

### Uso esperado
- Verde: principal, acolhedor, marca e fundo de destaque
- Azul: energia, confiança, blocos de equipe/ação
- Rosa: emoção, comunidade, destaque de eventos
- Amarelo: calor, atenção, material de eventos e urgência
- Branco e offwhite: clareza, espaço, legibilidade
- Preto/verde escuro: texto principal e contraste

### Regras de uso
- Não misturar mais de 2-3 cores principais por bloco
- Use contraste forte em hero e CTAs, mas mantenha o layout limpo
- A cor deve ser usada para segmentar conteúdo, não para “decorar” sem propósito

---

## 3) Tipografia

### Fontes
- Títulos: Cabinet Grotesk
- Texto geral: Work Sans
- Sistema fallback: system-ui, Segoe UI, Roboto, Arial, sans-serif

### Hierarquia visual
- Títulos grandes, agressivos, com peso pesado e letras apertadas
- Textos de corpo mais suaves e legíveis
- Uso de line-height confortável e boa separação de blocos

Exemplos de comportamento:
```css
.hero__title {
  font-family: "Cabinet Grotesk";
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-size: clamp(28px, 4.4vw, 60px);
}

.section__title {
  font-family: "Cabinet Grotesk";
  font-size: clamp(46px, 3.6vw, 56px);
  line-height: 1.15;
  letter-spacing: -0.01em;
}
```

### Regra de tom editorial
Os títulos devem soar como convite e organização coletiva, nunca como marketing frio. A linguagem é direta, inspiradora e humana.

---

## 4) Estrutura geral do layout

### Grid base
- Container central com largura máxima de ~1120px
- Margens laterais com 92% da tela em mobile
- Blocos em grid de 12 colunas em desktop

```css
.container {
  width: min(1120px, 92%);
  margin-inline: auto;
}
```

### Espaçamento
- O site usa espaçamento generoso entre seções
- Cards e blocos têm bordas arredondadas e grandes gaps entre elementos
- Há muita sensação de ar e proximidade entre componentes, sem apertar o conteúdo

### Elementos fundamentais
- navegação fixa no topo
- hero com grande impacto visual
- blocos de destaque em cards
- área de comunidade e time
- eventos em grid
- CTA de WhatsApp final
- footer com resumo institucional e links

---

## 5) Comportamento de navegação

### Menu principal
- Posicionado fixo no topo com efeito de “pílula” branca
- Fundo branco com borda arredondada
- Sombra leve e borda arredondada de 40px
- Link ativo em verde com peso mais forte
- Hover: fundo verde + texto branco, leve lift

```css
.nav {
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 50;
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}
```

### Menu mobile
- Em telas menores, o menu vira overlay em tela cheia
- Botão hambúrguer substitui nav horizontal
- O scroll da página é bloqueado quando o menu está aberto
- O comportamento é utilitário, direto e acessível

---

## 6) Hero e identidade de abertura

### Estrutura do hero
- Fundo verde principal
- Círculos concêntricos animados no fundo
- Texto central forte e curto
- CTA principal em azul
- Pequenas labels flutuantes com nomes de pessoas ou temas, em cores distintas

### Regras do hero
- O hero é o bloco de maior presença visual do site
- O título é declarativo e emocional
- O texto de apoio é curto e cheio de acolhimento
- O CTA principal está sempre bem visível

### Elementos do hero
```html
<section id="hero" class="hero">
  <div class="hero__bg">
    <div class="rings rings--1"></div>
    <div class="rings rings--2"></div>
    <div class="rings rings--3"></div>
  </div>
  <div class="container hero__content">
    <h1 class="hero__title">...</h1>
    <p class="hero__desc">...</p>
    <div class="hero__cta">
      <a class="btn btn--primary">...</a>
    </div>
  </div>
</section>
```

### Interação
- Animação sutil de rings em movimento lateral
- Labels flutuantes com float suave
- O movimento é leve, não excessivo

---

## 7) Componentes principais

### Botões

#### CTA primário
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.25s ease;
}

.btn--primary {
  background: #3681FF;
  color: #fff;
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 0px black;
}
```

### Regras dos botões
- Botões são de alto contraste e têm borda leve
- Hover gera pequeno lift + sombra em offset, quase manual/handmade
- O visual nunca fica “plano” demais

### Cards de funcionalidades / sobre
- Cards em grid de 3 colunas em desktop
- Fundo cinza claro, bordas arredondadas
- Hover com lift e sombra offset preta
- Card destacado com fundo azul e texto branco

```css
.feature-card {
  grid-column: span 4;
  background: #f2f4f3;
  border-radius: 18px;
  padding: 18px;
  min-height: 260px;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 8px 8px 0px black;
}
```

---

## 8) Modal e ações de conversão

### Modal de boas-vindas
- Overlay escurecido e centralizado
- Modal branco com borda arredondada
- Texto em centro e CTA visível
- Último passo de conversão para vagas e engajamento comunitário

```css
.welcome-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(12, 17, 16, 0.55);
  display: grid;
  place-items: center;
  z-index: 1000;
}
```

### Comportamento
- Aparece após 400ms
- Pode ser fechado com botão X ou clique fora
- Esse tipo de modal é usado como ferramenta de conversão leve, não intrusiva

---

## 11) Responsividade

### Desktop
- Layout em grade equilibrada com colunas largas
- Hero centralizado, cards distribuídos em 3 colunas
- Navegação em linha horizontal

### Tablet
- Redução para 2 colunas em cards e grids
- Layout ainda mantém grande respiro e legibilidade

### Mobile
- Hero mais compacto, com bordas menos agressivas
- Cards viram 1 coluna em áreas críticas
- Menu vira overlay cheio
- Labels flutuantes desaparecem para priorizar leitura
- Botões dos CTAs ficam em coluna vertical

### Regras de mobile
- Nunca forçar excesso de densidade visual
- Priorizar leitura, navegação e ação rápida
- Manter os blocos com bordas arredondadas e espaçamento consistente

---

## 12) Movimento e microinterações

### Diretrizes
- O site prefere movimento suave e contextual, não exagerado
- Microinterações são usadas em hover e reveal de blocos
- O movimento deve reforçar hierarquia, não distrair

### Exemplos do sistema
- hover de cards com lift + shadow offset
- hover de botões com translateY e sombra
- rings do hero com scale suave em loop
- labels flutuantes com movimento leve em eixo Y/X
- reveals de seção com GSAP usando y:24 → 0

```js
gsap.to(targets, {
  y: 0,
  opacity: 1,
  duration: 0.8,
  ease: 'power3.out',
  stagger: 0.06,
  scrollTrigger: {
    trigger: targets[0],
    start: 'top 75%'
  }
});
```

### Regra importante
O movimento deve parecer humano, orgânico e colaborativo, nunca hiper-polido ou “startup premium” frio.

---

## 13) Tom de voz e conteúdo visual

A linguagem textual do site é:
- acolhedora
- inclusiva
- específica para comunidade de design
- forte no sentido de pertencimento
- direta, sem burocracia

### Exemplos de tom
- “A comunidade onde o design é coletivo”
- “Apaixonados por design, movidos por pessoas.”
- “Não fique desenhando sozinh@ no quadradinho.”
- “Faça parte da comunidade”

### Isso influencia a UI
- textos curtos, diretos e encorajadores
- CTAs emocionais, orientados a ação
- grande presença de comunidade, Leituras objetivas e humanas

---

## 14) Padrões de código que devem ser reproduzidos

### Classes recorrentes
- `.container`
- `.hero`
- `.hero__title`
- `.hero__desc`
- `.hero__cta`
- `.btn`, `.btn--primary`
- `.section__title`
- `.feature-card`, `.feature-card--highlight`
- `.team-card`
- `.event-card`, `.event-card--pink`, `.event-card--yellow`, `.event-card--blue`, `.event-card--green`
- `.footer`
- `.nav`, `.nav__links`, `.nav--open`

### Padrões de estrutura
- Cada seção começa com um título forte e um bloco de conteúdo
- A informação é separada por blocos visuais claros e espaçados
- O grid serve para organizar e dar ritmo
- A cor é usada para sinalizar intenção, não apenas para embellecer

---

## 15) Regras para outras IAs copiando este sistema

### Faça isso
- use títulos em Cabinet Grotesk
- mantenha fundo verde e azul como blocos principais
- use bordas arredondadas e sombras offset para dar handcrafted feel
- priorize blocos organizados em grid
- mantenha mensagens acolhedoras e community-first
- use CTAs com forte contraste e ação clara

### Evite isso
- não usar visual ultra minimalista sem personalidade
- não criar cards muito iguais entre si sem diferenciação de função
- não usar excesso de cinza frio ou aparência corporativa demais
- não transformar o site em loja premium sem comunidade
- não priorizar tecnologia pura em detrimento do acolhimento humano

---

## 16) Prompt de referência para IA

```text
Siga a linguagem visual do site UXBrasília:
- visual acolhedor, comunitário e vibrante
- fundo principal em verde (#38b26f)
- uso secundário de azul (#2e67ff), rosa (#d83b96), amarelo (#f6c446)
- tipografia forte com Cabinet Grotesk para títulos e Work Sans para texto corpo
- layout com grande hero central, cards em grid, blocos coloridos e seções bem espaçadas
- use bordas arredondadas, sombras offset e hover com elevação sutil
- mantenha tom de comunidade, colaboração e pertencimento
- avoid cold corporate style; prefer human, direct and energetic tone
- preserve clear CTAs and good contrast
- apply rounded pill nav, cards, strong section headers and warm visual rhythm
```

---

## 17) Referências internas no projeto

Arquivos principais que definem a identidade visual:
- index.html
- styles.css
- scripts/script.js
- scripts/menu-footer.js

Arquivos auxiliares para padronização:
- markdowns/MENU_FOOTER_CENTRALIZADOR.md
- markdowns/EVENTOS_README.md
- markdowns/DESTAQUES_README.md

---

## 18) Resumo executivo

Este sistema visual comunica uma comunidade ativa de design, com forte presença de acolhimento, aprendizado e colaboração. Ele mistura energia visual, clareza editorial e comportamento web amigável e acessível. A identidade não é “fria” nem “luxo premium”; ela é humana, prática, vibrante e construída para mobilizar pessoas.

A regra principal é: o site deve sempre parecer uma comunidade viva, reunida em torno do design, da troca e da construção coletiva.
