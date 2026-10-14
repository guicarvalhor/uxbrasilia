export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string;
  format: 'md' | 'html';
  contentBody?: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: "post-3",
    slug: "abertura-de-vagas-para-leads",
    title: "Abertura de vagas para leads: venha construir a próxima etapa da UX Brasília",
    subtitle: "Uma oportunidade para liderar programas, impulsionar iniciativas e fortalecer a comunidade com autonomia e colaboração.",
    category: "Comunicado",
    date: "15 de Setembro, 2026",
    image: "/blog/imagens/leads.jpg",
    imageAlt: "Pessoa em reunião colaborativa discutindo iniciativas da comunidade UX Brasília",
    excerpt: "A UX Brasília está abrindo um novo ciclo de vagas para leads de programas e frentes estratégicas. Se você quer contribuir com autonomia e impacto, essa é a sua oportunidade.",
    content: "blog/paginas/post-3.md",
    format: "md",
    contentBody: `A UX Brasília está abrindo um novo ciclo de vagas para leads de programas e frentes estratégicas da comunidade.

## A oportunidade de liderar iniciativas que impactam a comunidade

Estamos buscando pessoas que queiram assumir um papel ativo na construção e no desenvolvimento de programas, eventos, conteúdos, parcerias e experiências que fortalecem a comunidade de UX no Distrito Federal.

Nossa estrutura é horizontal, colaborativa e orientada por propósito. Por isso, as vagas para lead são pensadas para quem quer criar, propor, conectar e entregar impacto com autonomia e responsabilidade.

## O que a atuação como lead envolve

Cada lead recebe a oportunidade de conduzir uma frente ou iniciativa dentro da comunidade, com espaço para:

- definir prioridades e planejamento de ações;
- mobilizar pessoas e parceiros;
- criar e executar programas com autonomia;
- colaborar com a comunidade em um ambiente de aprendizado compartilhado;
- transformar ideias em experiências concretas para milhares de pessoas.

## O que estamos buscando

Buscamos pessoas com vontade de contribuir, boa comunicação, capacidade de organização e interesse em fazer parte de uma comunidade viva e em constante crescimento.

A ideia não é assumir uma hierarquia rígida, mas sim liderar com clareza, escuta e colaboração. A atuação como lead é uma oportunidade de aprender, conectar e apoiar a comunidade com iniciativa e visão estratégica.

## Como participar

Se você tem interesse em assumir uma frente de atuação, conhecer melhor a dinâmica da comunidade e contribuir com seu tempo e energia, essa é a sua chance.

<div class="post-cta-button">
    <a href="/vagas" class="btn btn--primary">Ver vagas abertas</a>
</div>

## A comunidade cresce com pessoas que se envolvem

A UX Brasília é feita por pessoas que acreditam no poder da troca, da colaboração e do aprendizado coletivo. Quando você participa como lead, você não apenas ajuda a sustentar a comunidade — você também cresce junto com ela.

Se você quer contribuir com um programa, fortalecer uma área e transformar ideias em ação, venha fazer parte desse movimento.`
  },
  {
    id: "post-1",
    slug: "cafes-brasilia",
    title: "Café e Frame: As melhores cafeterias para trabalhar em Brasília",
    subtitle: "Uma seleção da comunidade para você encontrar o ambiente perfeito para focar e ser criativo.",
    category: "Dicas Locais",
    date: "26 de Setembro, 2025",
    image: "/assets/lojinha/café-ux.png",
    imageAlt: "Pessoa trabalhando com um notebook em uma cafeteria aconchegante",
    excerpt: "Cansado do home office? Preparamos uma seleção especial com os melhores cantinhos de Brasília para você conectar seu notebook, tomar um bom café e ser produtivo...",
    content: "blog/paginas/post-1.html",
    format: "html",
    contentBody: `<div class="post-content">
    <p>A rotina de trabalho remoto ou híbrido nos deu flexibilidade, mas também o desafio de encontrar lugares inspiradores para variar o ambiente. Nada como o aroma de café fresco e o som ambiente de uma boa cafeteria para estimular a criatividade e a produtividade, não é mesmo?</p>

    <p>Pensando nisso, a comunidade UXBrasília se uniu para criar um guia vivo com as melhores cafeterias para trabalhar na nossa cidade. Levamos em conta o essencial: qualidade do Wi-Fi, disponibilidade de tomadas, conforto, e claro, um café que abraça a alma.</p>

    <h2>Nossa Lista Completa no Notion</h2>
    <p>Abaixo você encontra nossa base de dados completa e sempre atualizada no Notion.</p>

    <iframe src="https://flax-brain-00d.notion.site/ebd/20f357ab614b80f7a3ddd5e0f28a90be?v=20f357ab614b805f9f46000c0926841f" width="100%" height="700px" frameborder="0" allowfullscreen style="border-radius:12px;margin:1.5rem 0;"></iframe>
    
    <h2>E você, qual o seu favorito?</h2>
    <p>Esta lista é um projeto da comunidade e está sempre crescendo. Faltou o seu refúgio preferido para trabalhar em BSB? Deixe uma sugestão em nossas redes sociais e nos ajude a manter este guia cada vez mais completo!</p>

    <div class="social-highlight-grid" style="margin-top:2rem;">
        <a href="https://www.instagram.com/uxbrasilia/" target="_blank" rel="noopener noreferrer" class="social-card social-card--instagram">
            <div class="social-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            </div>
            <div class="social-card__content">
                <h3>Instagram</h3>
                <p>@uxbrasilia</p>
            </div>
            <div class="social-card__action">
                <span>Seguir</span>
            </div>
        </a>
        <a href="https://www.linkedin.com/company/uxbrasilia" target="_blank" rel="noopener noreferrer" class="social-card social-card--linkedin">
            <div class="social-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </div>
            <div class="social-card__content">
                <h3>LinkedIn</h3>
                <p>UXBrasília</p>
            </div>
            <div class="social-card__action">
                <span>Conectar</span>
            </div>
        </a>
    </div>
</div>`
  },
  {
    id: "post-2",
    slug: "ux-brasilia-primeira-edicao",
    title: "Memórias da nossa 1ª Edição: Como foi o encontro da comunidade UX Brasília",
    subtitle: "Um dia que ficará para a história, marcado por reencontros, novas conexões e muito amor pelo design.",
    category: "Eventos da Comunidade",
    date: "06 de Setembro, 2025",
    image: "/assets/img1.png",
    imageAlt: "Foto da comunidade reunida na 1ª edição do evento UX Brasília",
    excerpt: "Que dia incrível! A 1ª edição do encontro da comunidade UX Brasília foi tudo o que sonhamos e muito mais. A energia no local era contagiante!",
    content: "blog/paginas/post-2.md",
    format: "md",
    contentBody: `Que dia incrível! A 1ª edição do encontro da comunidade UX Brasília foi tudo o que sonhamos e muito mais. A energia no local era contagiante!

## Um espaço para conexão e aprendizado

O evento foi pensado para ser um ponto de encontro, um lugar para fortalecer os laços da nossa comunidade de design e tecnologia no Distrito Federal. Tivemos palestras inspiradoras que abordaram temas como Ética aplicada à pesquisa com IA: Desafios contemporâneos com a Polli Guimarães e UX Research na prática com a Luiza Moreth.

Mais do que o conteúdo, o que realmente marcou o dia foram as pessoas. As conversas nos corredores, os novos contatos no LinkedIn, as ideias de projetos que surgiram durante o coffe break... Tudo isso mostra a força e a importância de termos um espaço como o UX Brasília.

## Confira as fotos e reviva os melhores momentos!

Para quem esteve lá e quer matar a saudade, ou para quem não pôde ir e quer sentir um pouco da energia do dia, preparamos um álbum com as fotos oficiais do evento.

<div class="post-cta-button">
    <a href="https://drive.google.com/drive/folders/1L1CI4UlVuDzK4yzRHPwHSfJTm1yy-V89?usp=sharing" target="_blank" class="btn btn--ghost">Acessar a Galeria de Fotos</a>
</div>

## Agradecimento e próximos passos

Queremos deixar um agradecimento gigante a todos que compareceram, as nossas incríveis palestrantes e a todos os voluntários que trabalharam duro para fazer este evento acontecer. Vocês são a alma da comunidade!

Fique de olho em nossas redes sociais para não perder as novidades sobre os próximos eventos. Mal podemos esperar para nos encontrarmos novamente!

<div class="social-highlight-grid" style="margin-top:2rem;">
<a href="https://www.instagram.com/uxbrasilia/" target="_blank" rel="noopener noreferrer" class="social-card social-card--instagram">
    <div class="social-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
    </div>
    <div class="social-card__content">
        <h3>Instagram</h3>
        <p>@uxbrasilia</p>
    </div>
    <div class="social-card__action">
        <span>Seguir</span>
    </div>
</a>
<a href="https://www.linkedin.com/company/uxbrasilia" target="_blank" rel="noopener noreferrer" class="social-card social-card--linkedin">
    <div class="social-card__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
        </svg>
    </div>
    <div class="social-card__content">
        <h3>LinkedIn</h3>
        <p>UXBrasília</p>
    </div>
    <div class="social-card__action">
        <span>Conectar</span>
    </div>
</a>
</div>`
  }
];
