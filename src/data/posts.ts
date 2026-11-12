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
    id: "post-4",
    slug: "entrando-em-ux-ui-por-onde-comecar",
    title: "Entrando em UX/UI sem surtar: por onde começar, o que estudar e como trocar ideia na comunidade",
    subtitle: "Um guia pé no chão com o que realmente ajuda no começo da jornada — dos primeiros rabiscos no papel até como perder a vergonha de mandar mensagem no grupo.",
    category: "Carreira",
    date: "12 de Novembro, 2026",
    image: "/blog/imagens/carreira-ux-ui.jpg",
    imageAlt: "Caderno com rascunhos de telas mobile feitas à mão, post-its, notebook com interface e café em mesa de madeira em Brasília",
    excerpt: "Começando agora em UX e UI e sem saber qual passo dar primeiro? Reunimos dicas práticas do que fazer, onde estudar de graça e como se comunicar no grupo da comunidade sem trava.",
    content: "blog/paginas/post-4.md",
    format: "md",
    contentBody: `Se você acabou de cair no universo de UX e UI — ou tá aí com uma aba do Figma aberta, dez vídeos pausados no YouTube e zero ideia de qual deveria ser o próximo passo —, respira fundo. Todo mundo que hoje trabalha com produto digital já passou exatamente por esse momento em que parece que a galera fala uma língua secreta cheia de siglas em inglês e você tá tentando entender o básico.

A verdade é que não existe um único roteiro mágico pra entrar na área. Mas existem caminhos bem mais leves (e menos caros) do que sair comprando três formações caras antes mesmo de desenhar a primeira tela.

## UX e UI na prática: sem complicar

Muita gente trava tentando decorar a definição de livro de cada sigla. Pra começar sem neura, pensa assim:

- **UX (User Experience)** é sobre entender o problema das pessoas e desenhar o caminho que faz sentido pra elas resolverem aquilo. É conversar com quem usa, mapear onde a pessoa trava, organizar a informação e testar se a ideia realmente funciona fora da sua cabeça.
- **UI (User Interface)** é dar forma visual e interativa a esse caminho. É escolher tipografia legível, criar hierarquia, definir espaçamentos, estados de botão, contraste de cor e garantir que a interface seja clara e gostosa de usar no celular ou no computador.

Na maior parte das vagas de entrada no Brasil, especialmente em times menores e aqui no mercado do DF, as duas frentes andam juntas. Você não precisa virar especialista nos dois de uma vez só, mas entender como uma conversa com a outra faz muita diferença logo no início.

## Por onde começar de verdade (antes de abrir o Figma)

Um erro bem comum de quem tá começando é achar que estudar UX/UI é só aprender ferramenta. O Figma é ótimo, mas ele é só o lápis — se você não sabe o que quer resolver, a tela bonita não se sustenta.

Se você quer dar o primeiro passo ainda essa semana, tenta fazer esse exercício simples:

- **Escolha um problema real perto de você.** Pode ser o aplicativo de agendamento da clínica do seu bairro, o site confuso de um serviço público ou o cardápio digital de uma cafeteria que você frequenta aqui em Brasília.
- **Observe alguém usando.** Chama um amigo, sua mãe ou um colega de trabalho, pede pra pessoa tentar fazer uma tarefa simples ali dentro e fica só olhando. Não ajuda, não explica. Anota onde ela franziu a testa ou clicou no lugar errado.
- **Rabisca no papel primeiro.** Pega um caderno e desenha como você resolveria aquele fluxo em três ou quatro telas. Papel não te prende em alinhamento de pixel e te deixa pensar livre.
- **Passa pro Figma e testa de novo.** Só depois de ter a lógica clara é que vale montar o protótipo no digital e mostrar pra outras pessoas testarem.

Esse ciclo curto vale muito mais para o seu portfólio do que copiar cinco telas de banco sem saber por que cada botão tá ali.

> Não espere ter um projeto gigante e perfeito pra começar a praticar. Um estudo pequeno, honesto e bem explicado sobre um problema real chama muito mais atenção do que dez telas bonitas sem contexto.

## O que fazer pra treinar o olhar e montar repertório

Enquanto você aprende a pensar fluxo e pesquisa, seu olho de UI precisa de treino diário. Algumas coisas simples que ajudam muito:

- **Copie interfaces boas (só pra treinar!).** Pegue um app que você usa todo dia — Nubank, iFood, Spotify — tire print de duas telas e tente reproduzir igualzinho no Figma. Você vai perceber na marra como funcionam margens, tamanhos de fonte, espaçamento e contraste. Só não publique cópia como projeto autoral, combinado?
- **Leia os guias oficiais das plataformas.** Antes de inventar moda com componente, dê uma olhada no [Material Design](https://m3.material.io/) (Google) e nas [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) (Apple). É ali que você entende por que um botão tem certo tamanho mínimo de toque ou por que menus funcionam de tal jeito no Android e no iOS.
- **Documente suas decisões.** Quando montar seu primeiro case no Notion, Behance ou site próprio, conte a história real: qual era o problema, o que você descobriu conversando com pessoas, o que testou, o que deu errado e o que mudou depois do teste. Quem recruta quer entender como você pensa, não só ver o resultado final.

## Cursos e materiais que valem o seu tempo

Você não precisa gastar uma fortuna logo na largada. Dá pra construir uma base muito sólida com material gratuito ou acessível antes de investir em qualquer formação paga:

- **[Certificado de UX Design do Google (Coursera)](https://www.coursera.org/professional-certificates/google-ux-design):** ótimo pra pegar o vocabulário da área e enxergar o processo de ponta a ponta. Dica: na plataforma dá pra solicitar auxílio financeiro ou assistir boa parte das aulas no modo ouvinte sem pagar.
- **[Figma Learn](https://help.figma.com/hc/en-us) e [canal oficial do Figma](https://www.youtube.com/@Figma):** esqueça pagar caro só pra aprender onde ficam os botões da ferramenta. Os tutoriais da própria equipe do Figma (principalmente sobre Auto Layout, Components e Variables) são diretos e sempre atualizados.
- **[Nielsen Norman Group (NN/g)](https://www.nngroup.com/articles/):** é a referência clássica em pesquisa e usabilidade. Os artigos são curtos, baseados em evidência e ótimos pra consultar sempre que pintar uma dúvida sobre formulário, navegação ou acessibilidade.
- **Leituras que não dão sono:** *"Não Me Faça Pensar"* (Steve Krug) e *"O Design do Dia a Dia"* (Don Norman) continuam sendo ótimas pedidas pra mudar a forma como você enxerga portas, placas, sites e aplicativos no cotidiano.
- **Programas da comunidade:** fique de olho nas edições do nosso [Decola UXBrasília](/decola) (programa de mentoria gratuito da comunidade) e nos encontros do Clube do Livro para aprender acompanhado(a).

## Como se comunicar na comunidade (e perder a trava no grupo)

Muita gente entra no grupo da UX Brasília no WhatsApp ou no [Discord](https://discord.gg/PQqQsty3V), lê tudo quietinha por meses e nunca manda uma linha com medo de "parecer iniciante demais" ou "atrapalhar". Mas comunidade só faz sentido quando tem troca — e todo mundo ali já travou num Auto Layout ou numa entrevista de usuário pela primeira vez.

Algumas dicas práticas pra chegar chegando e criar conexões reais por lá:

- **Não mande só um "oi, pessoal" ou link jogado.** Quando for pedir ajuda ou feedback de portfólio, dê contexto. Em vez de mandar *"Gente, avaliem meu case"* + link, experimente algo como: *"Oi gente! Tô montando meu primeiro projeto sobre agendamento de consultas e fiquei na dúvida se a etapa 2 do fluxo ficou confusa. Alguém consegue dar uma olhada rápida nisso?"*. Fica muito mais fácil de alguém parar e te responder com carinho.
- **Traga dúvidas honestas, mas mostre o que você já tentou.** Perguntar *"Como eu faço pra aprender UI?"* é amplo demais pra responder no WhatsApp. Agora, perguntar *"Tentei alinhar esses cards com Auto Layout e o botão tá quebrando no mobile, alguém já passou por isso?"* resolve sua dor em dois minutos.
- **Participe antes de precisar.** Responda quando alguém pedir opinião sobre um aplicativo, comente um link que te ajudou, dê boas-vindas pra quem chegou hoje. Assim você deixa de ser só um número desconhecido na lista de participantes.
- **Vá aos encontros presenciais.** Se você mora no DF ou entorno, tente colar nos eventos presenciais, rodas de conversa e cafés da comunidade. Conversar 15 minutos no intervalo tomando um café gera mais conexão verdadeira do que meses só mandando mensagem no grupo.
- **Respeite o tempo de quem ajuda.** Quando alguém se oferecer pra olhar seu portfólio ou conversar sobre transição de carreira, já chegue com 2 ou 3 perguntas objetivas anotadas. Isso mostra cuidado com o tempo do outro e faz você aproveitar muito melhor a troca.

No fim das contas, entrar em UX/UI é um processo de tijolinho por tijolinho. Você não precisa saber tudo hoje — só precisa continuar curioso(a), praticar com problemas reais e caminhar perto de outras pessoas que também estão construindo o design por aqui.

<div class="post-cta-button">
    <a href="https://chat.whatsapp.com/D6ycyYpQCWFDedC5rY6IYt" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Entrar no grupo do WhatsApp</a>
</div>

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
  },
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
    <a href="/contato" class="btn btn--primary">Falar com a coordenação</a>
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

export interface PostHeading {
  id: string;
  text: string;
}

export function slugifyHeading(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getReadingTimeMinutes(post: BlogPost): number {
  const source = post.contentBody || post.excerpt || '';
  const plainText = source
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!plainText) return 1;
  const wordCount = plainText.split(' ').filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 190));
}

export function extractPostHeadings(post: BlogPost): PostHeading[] {
  const source = post.contentBody || '';
  if (!source) return [];

  const headings: PostHeading[] = [];
  const counts = new Map<string, number>();

  const registerHeading = (rawText: string) => {
    const clean = rawText
      .replace(/<[^>]+>/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim();
    if (!clean) return;
    const base = slugifyHeading(clean) || `secao-${headings.length + 1}`;
    const seen = counts.get(base) ?? 0;
    counts.set(base, seen + 1);
    const id = seen === 0 ? base : `${base}-${seen + 1}`;
    headings.push({ id, text: clean });
  };

  if (post.format === 'html') {
    const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
    let match: RegExpExecArray | null;
    while ((match = h2Regex.exec(source)) !== null) {
      registerHeading(match[1]);
    }
    return headings;
  }

  for (const rawLine of source.split(/\r?\n/)) {
    const trimmed = rawLine.trim();
    if (trimmed.startsWith('## ')) {
      registerHeading(trimmed.slice(3));
    }
  }
  return headings;
}

