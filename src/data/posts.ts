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
    id: "post-5",
    slug: "auto-layout-no-figma-sem-dor-de-cabeca",
    title: "Auto Layout no Figma sem dor de cabeça: o que realmente importa no dia a dia",
    subtitle: "Entenda de vez quando usar Fill, Hug ou Fixed e pare de quebrar telas inteiras toda vez que o texto de um card muda de tamanho.",
    category: "Figma",
    date: "22 de Outubro, 2026",
    image: "/blog/imagens/figma-auto-layout.jpg",
    imageAlt: "Designer trabalhando no notebook com frames modulares e guias de Auto Layout no Figma em mesa de estúdio",
    excerpt: "Noventa por cento da briga com Auto Layout vem de três configurações simples. Veja como estruturar componentes flexíveis de dentro para fora e testar com conteúdo real.",
    content: "blog/paginas/post-5.md",
    format: "md",
    contentBody: `Quem começa a mexer no Figma costuma passar por duas fases bem parecidas: primeiro coloca tudo solto dentro de um frame e sofre para alinhar cada card na mão; depois descobre o Auto Layout, aperta \`Shift + A\` em tudo ao mesmo tempo e vê o layout inteiro quebrar de um jeito misterioso.

Se isso já aconteceu com você, calma. O problema quase nunca é falta de prática com a ferramenta, e sim tentar usar todas as opções ao mesmo tempo sem entender a lógica por trás de três decisões simples.

## Pare de brigar com Fill, Hug e Fixed

Noventa por cento das dores de cabeça com Auto Layout nascem na largura e na altura dos elementos. Antes de sair clicando, responde uma pergunta rápida para cada caixa:

- **Fixed (fixo)** serve para o que não muda de tamanho com o conteúdo, como um ícone de \`24px\`, uma barra lateral ou uma altura fixa de cabeçalho.
- **Hug contents (abraçar conteúdo)** faz o container encolher ou crescer conforme o que está dentro. Funciona muito bem para botões, chips de filtro e textos curtos.
- **Fill container (preencher)** diz para o elemento ocupar todo o espaço disponível dentro do pai. Esse é o segredo para listas, cards responsivos e campos de formulário que precisam acompanhar a largura da tela sem quebrar.

Um erro clássico é deixar um texto longo em *Hug* dentro de um card estreito: o texto sai vazando pela lateral do frame. Mudar esse texto para **Fill container** resolve o problema em dois segundos e ainda força a quebra de linha automática.

## Comece de dentro para fora, nunca ao contrário

Quando você tenta aplicar Auto Layout primeiro na tela inteira para depois arrumar os cards lá dentro, o Figma tenta adivinhar a direção de tudo de uma vez. O resultado geralmente vira uma bagunça de frames invertidos.

O caminho mais tranquilo é montar de baixo para cima:

1. Agrupe primeiro ícone + texto de um botão (\`Shift + A\`).
2. Depois junte título + descrição de um card em coluna vertical.
3. Só então combine a imagem e o bloco de texto em um card completo.
4. Por último, organize a grade ou a página juntando os cards já estruturados.

Assim cada camada tem uma responsabilidade clara, fica fácil dar nomes decentes aos frames e qualquer pessoa do time entende a árvore de camadas sem precisar abrir dez pastas chamadas \`Frame 482\`.

> Auto Layout bom não é o que tem mais camadas aninhadas — é o que continua intacto quando você troca um título de duas palavras por um texto de três linhas.

## Espaçamentos consistentes e menos números quebrados

Quando cada card tem \`13px\` de padding de um lado e \`18px\` do outro, o arquivo vira um quebra-cabeça impossível de manter. Vale definir uma escala simples de espaçamentos — por exemplo múltiplos de 4 (\`4, 8, 12, 16, 24, 32, 48\`) — e guardar esses valores como **Variables** de número no Figma.

Além de deixar a interface visualmente mais calma, o time de front-end não precisa ficar conferindo se \`15px\` era intencional ou erro de arraste do mouse. Se quiser aprofundar nos recursos nativos, vale consultar o [guia oficial de Auto Layout no Figma Learn](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties).

## Teste o componente com conteúdo real antes de aprovar

Antes de mandar uma tela para revisão ou desenvolvimento, faça três testes rápidos direto no canvas:

- **Duplique o texto:** coloque um nome de usuário bem grande ou um título com duas linhas extras para ver se o card empurra os vizinhos direito.
- **Reduza a largura do frame principal:** simule uma tela de celular estreita (\`360px\`) e veja se botões e textos se adaptam sem cortar informação.
- **Esconda um elemento opcional:** desligue um subtítulo ou ícone para conferir se o espaço vazio some sozinho.

Se o layout sobreviver a esses três testes, ele está pronto para virar componente e seguir para o próximo passo do projeto.`
  },
  {
    id: "post-6",
    slug: "por-que-interfaces-bonitas-ainda-confundem",
    title: "Por que tantas interfaces bonitas ainda confundem quem usa",
    subtitle: "Estética passa confiança na primeira olhada, mas clareza de hierarquia, rótulos visíveis e estados bem resolvidos são o que faz alguém concluir a tarefa.",
    category: "UI Design",
    date: "04 de Outubro, 2026",
    image: "/blog/imagens/interfaces-hierarquia.jpg",
    imageAlt: "Wireframes impressos de aplicativo móvel, cartelas de contraste de cor e tipografia sobre mesa clara",
    excerpt: "Quando o minimalismo esconde o que é clicável e o fluxo só considera o caminho feliz, até a tela mais elogiada trava quem tenta usar no celular.",
    content: "blog/paginas/post-6.md",
    format: "md",
    contentBody: `Abra qualquer rede social de design e você vai encontrar dezenas de telas impecáveis: sombras suaves, cantos arredondados perfeitos, gradientes discretos e gráficos coloridos. Muitas vezes, porém, quando um fluxo parecido chega na mão de quem realmente precisa pagar um boleto ou agendar uma consulta no celular, a pessoa trava no segundo passo.

Beleza visual ajuda na primeira impressão e passa confiança, mas estética isolada não resolve tarefa. Na prática, boa parte da confusão em produtos digitais nasce de decisões simples de interface que foram deixadas de lado na pressa de deixar a tela "limpa".

## Quando o minimalismo esconde o que a pessoa precisa fazer

Remover bordas, rótulos e divisórias até a tela parecer um pôster costuma render elogios no portfólio, mas cobra um preço alto no uso real:

- **Botões que parecem texto comum:** links sem sublinhado ou botões fantasmas sem contraste fazem a pessoa hesitar sobre o que é clicável.
- **Ícones sozinhos sem legenda:** fora de padrões muito universais (como lupa de busca ou lixeira), ícones abstratos obrigam o usuário a adivinhar o significado.
- **Campos de formulário sem rótulo fixo:** depender só do *placeholder* faz a pessoa esquecer qual dado estava preenchendo assim que começa a digitar.

Interface clara não é interface sem informação — é interface que mostra o necessário no momento certo, sem exigir esforço de adivinhação.

## Hierarquia visual é o que guia o olho em 3 segundos

Quando tudo na tela grita com o mesmo peso, nada se destaca. Se o título, o subtítulo, o aviso secundário e a ação principal usam pesos e tamanhos parecidos, o olhar passeia perdido.

Um exercício prático que funciona bem é afastar o olhar da tela (ou reduzir o zoom para 50%) e responder:

- Qual é a **primeira coisa** que chama atenção aqui?
- Dá para saber em menos de três segundos qual é a **ação principal** da página?
- As informações complementares parecem claramente subordinadas ao conteúdo principal?

Se a resposta for não, geralmente não falta mais cor ou ilustração — falta contraste de escala tipográfica, agrupamento por proximidade e coragem de reduzir o ruído ao redor do botão principal. Vale revisitar os princípios de clareza e hierarquia nas diretrizes do [Material Design 3](https://m3.material.io/foundations/layout/understanding-layout/overview).

> Uma interface não é boa quando não há mais nada para tirar da tela; ela é boa quando ninguém precisa pensar duas vezes para saber onde clicar.

## Estados esquecidos: vazio, carregamento e erro

Muita tela "perfeita" no Figma só existe no chamado caminho feliz: lista com quatro itens bonitinhos, foto recortada no tamanho exato e conexão instantânea. No mundo real, o usuário encontra:

- **Estado vazio:** primeira vez abrindo o app, sem histórico nenhum. O que aparece? Uma tela em branco assustadora ou uma orientação clara de como começar?
- **Estado de carregamento:** o botão foi clicado e a internet oscilou. Existe feedback de envio para evitar clique duplo?
- **Mensagem de erro:** algo deu errado no CPF ou na senha. A interface explica exatamente onde corrigir sem apagar o restante do formulário?

Desenhar esses três estados desde cedo muda completamente a qualidade da experiência — e evita retrabalho pesado quando o produto vai para produção.

## Teste de leitura rápida antes de fechar a tela

Antes de considerar uma interface pronta, experimente mostrar o protótipo estático por 5 segundos para alguém de fora do projeto e depois perguntar o que aquela tela faz e qual botão a pessoa clicaria primeiro. Se a explicação vier com dúvida, o ajuste quase sempre é de hierarquia, texto ou espaçamento — e resolver isso antes do código custa muito menos tempo para todo o time.`
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
    id: "post-7",
    slug: "teste-de-usabilidade-orcamento-zero",
    title: "Teste de usabilidade com orçamento zero: como rodar com 5 pessoas ainda essa semana",
    subtitle: "Você não precisa de laboratório caro para descobrir onde o usuário trava — basta um protótipo simples, tarefas bem escritas e disposição para ouvir em silêncio.",
    category: "Usabilidade",
    date: "19 de Agosto, 2026",
    image: "/blog/imagens/teste-usabilidade.jpg",
    imageAlt: "Duas pessoas em mesa de cafeteria realizando teste de usabilidade em smartphone com caderno de anotações",
    excerpt: "Esperar o cenário perfeito costuma significar nunca testar. Veja como convidar cinco pessoas, formular tarefas sem entregar a resposta e transformar achados em correções rápidas.",
    content: "blog/paginas/post-7.md",
    format: "md",
    contentBody: `Sempre aparece aquela desculpa clássica nos projetos: *"a gente adoraria testar essa tela com usuários, mas não tem verba nem prazo para pesquisa agora"*. Só que esperar o cenário ideal com laboratório de vidro espelhado e recrutamento pago significa, quase sempre, nunca testar nada até o produto ir ao ar e as reclamações chegarem no suporte.

Com cinco pessoas e uma hora livre na agenda, você já descobre a maioria dos gargalos graves de um fluxo — sem gastar um centavo com ferramenta cara.

## Por que cinco pessoas já entregam tanta resposta

Você não precisa de trinta entrevistas para descobrir que um botão passou batido ou que ninguém entendeu um termo no menu. Quando três ou quatro pessoas seguidas travam no mesmo lugar, o padrão já está escancarado na sua frente.

A lógica do teste enxuto não é provar estatística para um relatório acadêmico, e sim **enxergar falhas óbvias enquanto ainda é barato corrigir**. Uma tarde olhando gente real tentar usar o seu protótipo economiza semanas de ajuste depois do lançamento. Para quem quer conhecer a base dessa abordagem, o texto clássico do [Nielsen Norman Group sobre testes com 5 usuários](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/) explica bem o raciocínio por trás da amostragem qualitativa rápida.

## Quem convidar quando não há verba de recrutamento

Se você está em um time pequeno ou montando projeto de portfólio, o segredo é evitar testar apenas com outros designers da sua bolha — a gente já tem vício de olhar e adivinha onde o botão costuma ficar.

Boas saídas que funcionam muito bem:

- Pessoas da própria empresa que não participam do projeto (atendimento, financeiro, comercial).
- Conhecidos com perfil próximo de quem usaria o serviço no dia a dia.
- Voluntários da própria comunidade — puxar um chamado rápido no grupo do WhatsApp ou Discord da UX Brasília costuma render ótimas trocas de 15 minutos.

Só garanta que a pessoa não tenha visto você construir aquela tela antes, para o olhar vir realmente limpo.

## Como escrever tarefas sem entregar a resposta

O erro número um de quem conduz o primeiro teste é transformar a tarefa em tutorial disfarçado. Se o seu botão se chama *"Meus comprovantes"* e você pede *"clique em Meus comprovantes"*, você só testou se a pessoa sabe ler português.

Prefira cenários que descrevem o objetivo real sem copiar as palavras da tela:

- **Ruim:** *"Entre em Configurações e ative as notificações por e-mail."*
- **Melhor:** *"Imagine que você quer garantir que vai receber um aviso quando seu pedido mudar de status. Como você faria isso por aqui?"*

Repare como a segunda opção revela se a pessoa realmente procura aquilo em Configurações, no ícone de sino ou no rodapé da página.

> Durante o teste, seu papel não é defender a interface — é descobrir onde a interface deixou a pessoa na mão.

## O segredo mais difícil: ficar em silêncio

Quando quem está testando franze a testa e passa oito segundos olhando para a tela sem clicar, dá uma vontade enorme de ajudar dizendo *"ah, é ali em cima à direita!"*. Segure esse impulso.

Se você ajuda, perde exatamente o dado mais valioso da sessão. Em vez de dar a resposta, devolva com leveza: *"o que você estava esperando encontrar por aí?"* ou *"o que você achou que ia acontecer se clicasse nesse botão?"*.

## Transforme anotações em lista simples de correção

Não precisa montar apresentação gigante depois de cinco sessões rápidas. Faça uma tabela direta com três colunas:

1. **Onde a pessoa travou** (tela ou etapa do fluxo).
2. **Quantas pessoas passaram por isso** (ex: 4 de 5).
3. **Ajuste proposto** (texto mais claro, botão mais visível, mudança na ordem das etapas).

Corrija primeiro o que impediu as pessoas de terminar a tarefa, rode mais duas ou três conversas rápidas na semana seguinte e veja a diferença na confiança do time inteiro.`
  },
  {
    id: "post-8",
    slug: "entrevista-com-usuario-nao-e-interrogatorio",
    title: "Entrevista com usuário não é interrogatório: perguntas que evitam respostas prontas",
    subtitle: "Por que perguntar 'você usaria isso?' quase sempre engana o time — e como puxar histórias reais sobre o comportamento de quem usa.",
    category: "Pesquisa",
    date: "28 de Julho, 2026",
    image: "/blog/imagens/entrevista-pesquisa.jpg",
    imageAlt: "Duas pesquisadoras conversando de forma descontraída em mesa com post-its, gravador e roteiro impresso",
    excerpt: "Quando a pergunta pede opinião sobre o futuro, as pessoas respondem por educação. Aprenda a explorar fatos passados e usar o silêncio a favor da descoberta.",
    content: "blog/paginas/post-8.md",
    format: "md",
    contentBody: `Muita gente acha que conversar com usuários é só abrir uma chamada de vídeo, ler dez perguntas em ordem e anotar as respostas. Aí o roteiro acaba em doze minutos, todo mundo disse que *"achou legal"* e *"com certeza usaria"*, e o time continua sem saber o que construir na próxima sprint.

O motivo quase sempre está no jeito de perguntar. Quando uma pergunta pede opinião sobre o futuro ou valida a nossa própria ideia, as pessoas tendem a ser educadas — e educação não revela comportamento real.

## A armadilha do "você usaria isso?"

Perguntas hipotéticas geram respostas otimistas demais. Se você perguntar para alguém se ela usaria um aplicativo para organizar os gastos da semana, quase todo mundo diz que sim porque soa como um hábito responsável. Mas se você perguntar **como ela controlou os gastos nos últimos sete dias**, a história muda completamente.

Troque perguntas sobre intenção por perguntas sobre fatos passados:

- Em vez de *"O que você acha dessa funcionalidade de lembrete?"*, pergunte **"Qual foi a última vez que você esqueceu de pagar ou fazer algo parecido? O que aconteceu depois?"**
- Em vez de *"Você pagaria por um plano mensal?"*, pergunte **"Quais serviços parecidos você já paga hoje e o que te fez assinar?"**

Quando a pessoa conta uma história concreta, aparecem detalhes, gambiarras em planilhas, mensagens enviadas no próprio WhatsApp para não esquecer e frustrações verdadeiras — tudo o que uma pergunta fechada nunca captura.

## Pare de fazer perguntas fechadas em sequência

Se a resposta da pessoa puder ser só "sim" ou "não", o ritmo da conversa vira interrogatório policial. Você pergunta, a pessoa responde em duas palavras, e os dois ficam desconfortáveis.

Algumas aberturas simples destravam respostas ricas quase na hora:

- *"Me conta como costuma ser um dia comum quando você precisa resolver isso..."*
- *"O que foi mais chato na última vez em que você tentou fazer esse processo?"*
- *"Se você estivesse explicando esse passo para um colega novo no trabalho, o que diria?"*

Se quiser aprofundar nessa técnica de condução de entrevistas de descoberta, vale ler sobre abordagem não-diretiva no guia de [User Interviews do Nielsen Norman Group](https://www.nngroup.com/articles/user-interviews/).

> O melhor sinal de uma boa entrevista de pesquisa é quando você fala pouco e a pessoa começa a lembrar de detalhes que nem imaginava mencionar no começo da conversa.

## Deixe o silêncio trabalhar por você

Depois que a pessoa terminar uma frase curta, conte mentalmente até três antes de falar a próxima pergunta. Na maioria das vezes, ela preenche esse pequeno silêncio acrescentando o contexto mais honesto da conversa — justamente o *"mas na verdade o que me irrita mesmo é..."*.

Evite também reagir com entusiasmo demais quando a pessoa elogia uma ideia sua ou com cara de susto quando ela critica. Mantenha curiosidade calma: *"interessante, por que você faz desse jeito?"*.

## Cuide do básico para a conversa fluir

Antes de começar, reforce em trinta segundos que não há resposta certa nem errada, peça permissão se for gravar e deixe claro que o foco é aprender com a rotina da pessoa. E, se puder, convide alguém de produto ou engenharia para assistir em silêncio e anotar junto: ouvir a voz do usuário ao vivo muda reuniões inteiras muito mais rápido do que qualquer resumo por escrito.`
  },
  {
    id: "post-9",
    slug: "design-system-para-times-pequenos",
    title: "Design System para times pequenos: o que vale padronizar antes de criar 400 variantes",
    subtitle: "Como ganhar velocidade e consistência com um núcleo enxuto de tokens e componentes sem transformar o arquivo em uma obra interminável.",
    category: "Design System",
    date: "16 de Junho, 2026",
    image: "/blog/imagens/design-system-enxuto.jpg",
    imageAlt: "Cartões geométricos em papel verde e amarelo, réguas e esboços de grade modular organizados em mesa clara",
    excerpt: "Antes de desenhar dezenas de tabelas e gráficos raros, alinhe fundamentos básicos e componentes de formulário diretamente com o time de front-end.",
    content: "blog/paginas/post-9.md",
    format: "md",
    contentBody: `Existe um momento clássico em que a palavra "Design System" começa a aparecer em toda reunião de produto: o time cresceu um pouco, existem três telas de cadastro diferentes no ar, cada botão tem um arredondamento próprio e o front-end já não sabe qual tom de cinza é o oficial.

A reação comum é abrir um arquivo novo no Figma e tentar desenhar um sistema gigantesco inspirado em grandes empresas de tecnologia — com dezenas de categorias de tokens, cinco variações de tabela e documentação interminável. Três semanas depois, o projeto atrasou e o arquivo ficou parado porque ninguém tinha tempo para manter aquilo vivo.

## Quando NÃO é hora de montar um sistema complexo

Se o produto ainda está validando se o negócio funciona com poucas telas no ar, passar um mês construindo biblioteca complexa é desperdício de energia. Nessa fase, um **guia de estilos enxuto** (cores principais, duas famílias ou pesos tipográficos e botões básicos) resolve com folga.

O Design System começa a se pagar de verdade quando:

- Mais de um designer ou squad mexe no mesmo produto ao mesmo tempo.
- Os mesmos padrões de formulário, modal e navegação se repetem em fluxos diferentes.
- O time de engenharia gasta tempo recriando componentes que já existiam em outra pasta do código.

## O mínimo viável que destrava consistência

Para times pequenos — de um a quatro designers — vale focar no núcleo que aparece em 80% das telas:

1. **Fundamentos claros (Tokens iniciais):** paleta de cores com papéis bem definidos (fundo, superfície, texto principal, texto secundário, erro, sucesso, destaque), escala simples de tipografia e múltiplos fixos de espaçamento.
2. **Controles de formulário:** botão primário, secundário e discreto, campo de texto (normal, focado, com erro e desabilitado), seletor e checkbox.
3. **Feedback e contenção:** alertas/mensagens de validação, modais ou diálogos de confirmação e estrutura padrão de card.

Não precisa inventar componente de gráfico raro ou calendário customizado na primeira versão. Se você quiser uma excelente referência brasileira de documentação clara e objetiva, vale olhar o [Padrão Digital de Governo (Gov.br Design System)](https://www.gov.br/ds/home), que organiza fundamentos e componentes de forma bem direta.

> Design System pequeno que o time inteiro usa todo dia vale dez vezes mais do que biblioteca completa que ninguém encontra na hora da sprint.

## Sem conversa com dev, vira só catálogo de figurinha

Um Design System não vive dentro do Figma — ele vive quando **design e código falam a mesma língua**. Se no Figma o botão se chama \`Btn/Green/Outline\` e no repositório de front-end se chama \`SecondaryActionButton\`, toda alteração vira retrabalho de tradução.

Antes de fechar a primeira versão dos seus componentes base:

- Sente meia hora com quem desenvolve o front-end para alinhar os nomes de cores, espaçamentos e variantes.
- Garanta que cada componente tenha os estados reais de interação (hover, foco por teclado, carregando, erro) e não só a aparência parada.
- Combine uma regra simples de manutenção: toda peça nova só entra na biblioteca oficial depois de ser usada de verdade em pelo menos uma entrega de produto.

Começar enxuto dá fôlego para evoluir o sistema junto com o produto real — sem virar gargalo nem obra inacabada.`
  },
  {
    id: "post-10",
    slug: "acessibilidade-na-pratica-6-ajustes-simples",
    title: "Acessibilidade na prática: 6 ajustes simples que melhoram qualquer interface hoje",
    subtitle: "Contraste legível sob o sol, área de toque confortável no celular e rótulos claros em formulários tornam o produto melhor para todo mundo.",
    category: "Acessibilidade",
    date: "11 de Maio, 2026",
    image: "/blog/imagens/acessibilidade-pratica.jpg",
    imageAlt: "Pessoa segurando smartphone ao ar livre com interface de alto contraste e texto legível sob luz natural",
    excerpt: "Boa parte das barreiras de acessibilidade pode ser evitada ainda no desenho das telas com seis verificações diretas que não atrasam nenhuma entrega.",
    content: "blog/paginas/post-10.md",
    format: "md",
    contentBody: `Quando o assunto é acessibilidade digital, muita gente ainda imagina algo distante, técnico demais ou exclusivo para um público muito específico. Na prática, acessibilidade aparece no celular sob o sol forte da Asa Sul, em alguém segurando o telefone com uma mão só no metrô, em quem usa leitor de tela ou em quem prefere navegar pelo teclado sem usar mouse.

E o melhor: boa parte dos problemas mais comuns pode ser evitada ainda na etapa de design, com ajustes simples que deixam a experiência melhor para todo mundo.

## 1. Contraste de texto e botão de verdade

Texto cinza-clarinho sobre fundo branco pode até parecer "suave" no monitor calibrado do escritório, mas desaparece completamente em telas simples ou sob luz natural.

Adote como hábito conferir o contraste antes de aprovar qualquer paleta: texto normal precisa atingir pelo menos **4,5:1** de contraste contra o fundo, e títulos grandes ou elementos gráficos precisam de pelo menos **3:1**. Ferramentas gratuitas como o [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) levam dez segundos para testar e evitam dor de cabeça lá na frente.

## 2. Área de toque generosa no celular

Botões minúsculos de \`28px\` ou ícones de fechar espremidos no canto funcionam com a pontinha do cursor do mouse, mas viram frustração garantida no polegar.

Mantenha botões, links isolados, abas e ícones clicáveis com área interativa mínima em torno de **44x44px** — mesmo quando o desenho visual do ícone for menor, a área clicável em volta deve ser confortável.

## 3. Rótulos reais nos campos (nada de depender só de placeholder)

Usar o texto dentro da caixa do input (\`"Digite seu e-mail"\`) como único identificador parece econômico visualmente, mas falha feio assim que a pessoa começa a digitar e perde a referência do que o campo pedia. Além disso, placeholders costumam ter contraste baixo por padrão nos navegadores.

Coloque sempre um \`<label>\` visível e permanente acima do campo, e deixe o placeholder apenas para exemplo de formato quando ajudar de verdade.

## 4. Nunca dependa só da cor para dar aviso

Se um formulário falhou e a única mudança foi pintar a borda do campo de vermelho, quem tem daltonismo — ou quem está vendo a tela com brilho baixo — não entende o que aconteceu.

Sempre combine cor com outro sinal claro: ícone de alerta e uma mensagem objetiva explicando o erro logo abaixo do campo (*"Informe um CPF com 11 dígitos"*).

> Acessibilidade não é uma camada extra colocada no fim do projeto para cumprir tabela; é qualidade básica de interface bem feita.

## 5. Ordem lógica de foco para quem usa teclado

Muita gente navega usando \`Tab\`, \`Shift + Tab\`, \`Enter\` e setas — seja por preferência, lesão temporária no punho ou uso de tecnologias assistivas. Vale sempre conferir no handoff:

- O estado de foco (\`:focus-visible\`) está claramente visível nos botões, links e menus?
- A ordem de navegação ao apertar \`Tab\` segue a leitura natural de cima para baixo e da esquerda para a direita?
- Quando um modal abre, o foco vai para dentro dele e volta para o botão de origem ao fechar?

## 6. Textos alternativos que informam de verdade

Ao definir imagens no projeto, evite descrições robóticas ou vazias. Se a foto ilustra um artigo ou mostra informação importante, escreva um \`alt\` curto e descritivo do que importa naquela cena. Se for apenas um grafismo decorativo de fundo, sinalize para ser ignorado por leitores de tela (\`alt=""\` ou \`aria-hidden="true"\`).

Pequenos cuidados como esses não atrasam entrega nenhuma — só tornam o produto mais humano, legível e respeitoso com quem usa. Se quiser consultar as referências oficiais, o [guia rápido das diretrizes WCAG da W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) é o melhor ponto de partida.`
  },
  {
    id: "post-11",
    slug: "microcopy-e-ux-writing-na-interface",
    title: "Microcopy e UX Writing: quando uma palavra muda a taxa de conclusão da tela",
    subtitle: "Botões claros que antecipam a ação, mensagens de erro sem culpa e um teste rápido em voz alta para eliminar textos robóticos.",
    category: "UX Writing",
    date: "20 de Abril, 2026",
    image: "/blog/imagens/ux-writing-microcopy.jpg",
    imageAlt: "Caderno aberto com rascunhos de microcopy para botões de interface, caneta e teclado sobre mesa iluminada",
    excerpt: "Quem usa o produto não separa layout de texto. Descubra como pequenos ajustes em botões, rótulos e mensagens de erro reduzem dúvidas e cliques errados.",
    content: "blog/paginas/post-11.md",
    format: "md",
    contentBody: `Às vezes o time passa dias discutindo o espaçamento de um card ou a sombra de um modal, enquanto o texto do botão continua vago e a mensagem de erro parece escrita por um servidor de 2004. Só que quem usa o produto não separa layout de texto — para quem está do outro lado da tela, **a palavra faz parte da interface**.

Um ajuste de duas ou três palavras em um momento crítico muitas vezes destrava mais conversões e evita mais chamados no suporte do que uma repaginada visual inteira.

## Botões que respondem "o que vai acontecer se eu clicar?"

Poucas coisas geram mais ansiedade do que uma janela de confirmação perguntando *"Tem certeza que deseja continuar?"* com dois botões chamados **OK** e **Cancelar**. Cancelar o quê? Cancelar a ação que eu pedi ou cancelar a minha assinatura inteira?

Troque rótulos genéricos por verbos claros que descrevem a consequência real:

- Em vez de *"OK / Cancelar"*, use **"Excluir rascunho"** e **"Manter rascunho"**.
- Em vez de *"Enviar"*, use **"Publicar vaga"** ou **"Confirmar agendamento"**.
- Em vez de *"Saiba mais"*, conte para onde o link leva: **"Ver critérios do programa"**.

Quando o rótulo antecipa exatamente o resultado do clique, a pessoa avança sem medo.

## Mensagens de erro sem culpa e com próximo passo

Nada afasta mais um usuário do que ler *"Erro inválido: operação não permitida (código 403)"* ou *"Você preencheu os dados incorretamente"*. Além de soar ríspido, não ajuda ninguém a resolver o problema.

Uma boa mensagem de erro responde três pontos curtos:

1. **O que aconteceu** em português simples.
2. **Por que aconteceu** (se fizer diferença para a pessoa).
3. **O que fazer agora** para continuar.

Por exemplo, em vez de *"Senha inválida"*, experimente **"Essa senha não confere com a cadastrada. Confira as letras maiúsculas ou clique em Recuperar senha."**

> Se você precisa de um parágrafo inteiro para explicar como usar um botão, o problema provavelmente não está na redação — está na clareza da interface.

## Consistência de termos evita confusão silenciosa

Chamar o mesmo recurso de *"Perfil"* no menu, *"Minha conta"* no cabeçalho e *"Dados pessoais"* no rodapé parece detalhe bobo, mas cria atrito constante para quem está aprendendo a usar o sistema.

Vale manter um glossário simples de uma página compartilhado entre design, produto e engenharia listando os termos oficiais das áreas, ações principais e tom de voz do produto. Para quem quer se aprofundar com exemplos práticos, as diretrizes de escrita do [Material Design Writing](https://m3.material.io/foundations/content-design/overview) trazem ótimas referências aplicáveis a qualquer produto em português.

## O teste mais barato que existe: leia a tela em voz alta

Antes de fechar um fluxo, leia em voz alta cada título, descrição, rótulo de campo e botão exatamente na ordem em que aparecem na tela. Você vai perceber na hora quando uma frase soa robótica, repetitiva ou formal demais para o público real. Se der vergonha de falar aquilo para alguém sentado na sua frente em um café, reescreva até soar como gente falando com gente.`
  },
  {
    id: "post-12",
    slug: "handoff-organizando-arquivos-no-figma",
    title: "Handoff que o time de desenvolvimento agradece: organizando arquivos no Figma",
    subtitle: "Separe rascunhos da área de entrega, documente estados vazios e de erro no canvas e substitua textões por 15 minutos de conversa antes da sprint.",
    category: "Figma",
    date: "09 de Março, 2026",
    image: "/blog/imagens/handoff-figma-dev.jpg",
    imageAlt: "Designer e desenvolvedor analisando especificações de interface e código lado a lado em um notebook",
    excerpt: "Quando o arquivo do Figma mistura versões antigas com telas oficiais, sobram dúvidas no código. Veja uma estrutura simples para entregar fluxos sem ruído.",
    content: "blog/paginas/post-12.md",
    format: "md",
    contentBody: `Muita gente ainda encara o *handoff* como aquele momento em que o designer joga o link do Figma no Slack na sexta-feira à tarde, escreve *"telas prontas!"* e some até a próxima semana. Na segunda de manhã, o time de desenvolvimento abre o arquivo e dá de cara com quinze variações quase idênticas da mesma página, camadas sem nome e zero explicação do que acontece quando a lista estiver vazia.

Quando o arquivo do Figma não ajuda quem vai programar, o preço aparece em forma de dúvidas picadas o dia inteiro, código improvisado e telas finais bem diferentes do planejado.

## Separe o parquinho da área de entrega

Todo projeto precisa de espaço para rascunhar ideias tortas, testar alternativas e guardar coisas descartadas. O problema começa quando esses rascunhos ficam misturados com a versão oficial aprovada para desenvolvimento.

Crie uma divisão simples e previsível nas páginas do arquivo:

- **\`✅ Pronto para Dev\`:** só o que está revisado, aprovado e vai entrar na sprint.
- **\`🚧 Em andamento\`:** telas em construção e exploração atual.
- **\`🗄️ Arquivo / Histórico\`:** versões antigas mantidas só para consulta.

Essa separação simples já evita que alguém implemente uma tela de duas semanas atrás por engano.

## Mostre os caminhos reais além da tela perfeita

Para quem vai escrever o código, a tela estática com dados ideais conta só metade da história. Deixe explícito no próprio canvas (ou em seções dedicadas logo ao lado):

- Como a interface se comporta no **desktop, tablet e celular** (especialmente onde colunas quebram ou menus recolhem).
- Quais são os **estados de interação**: botão normal, hover, foco, carregando e erro.
- O que aparece quando **não há nenhum dado cadastrado** ou quando o texto vem bem maior do que o esperado.

Use a ferramenta de **Sections** (\`Shift + S\`) no Figma para agrupar fluxos por jornada e mande sempre o link direto para a seção certa no card da tarefa — ninguém merece ficar caçando onde está a tela perdida em um canvas infinito. Para recursos específicos de inspeção, vale compartilhar com o time o guia do [Figma Dev Mode](https://www.figma.com/dev-mode/).

> Handoff não é passagem de bastão em que um lado termina e o outro começa; é uma conversa curta que evita metade das reuniões de correção depois.

## Faça um alinhamento de 15 minutos antes da sprint começar

Mesmo o arquivo mais organizado do mundo não substitui quinze minutos de conversa ao vivo antes de a tarefa entrar em desenvolvimento. Mostre o fluxo clicando rápido pelo protótipo, aponte regras de negócio escondidas (*"se o usuário não tiver plano ativo, esse card nem aparece"*) e deixe o dev perguntar logo de cara o que pode ser simplificado.

Muitas vezes, nessa conversa curta, o time descobre que uma animação ou filtro complexo levaria três dias extras de código e pode ser resolvido de um jeito muito mais simples sem perder valor para o usuário. Todo mundo ganha tempo — e o produto final sai muito mais fiel ao desenho.`
  },
  {
    id: "post-13",
    slug: "do-dado-bruto-a-decisao-de-produto",
    title: "Do dado bruto à decisão de produto: como apresentar pesquisa sem fazer um PDF de 60 slides",
    subtitle: "Como sintetizar entrevistas por padrão de comportamento, priorizar bloqueadores críticos e fechar a reunião com próximos passos claros.",
    category: "Pesquisa",
    date: "14 de Fevereiro, 2026",
    image: "/blog/imagens/sintese-pesquisa.jpg",
    imageAlt: "Equipe de produto organizando post-its por afinidade e cartões de insight em painel de vidro",
    excerpt: "Pesquisa só gera impacto quando orienta a próxima decisão do time. Aprenda a estruturar achados curtos, com evidências reais e foco no que muda agora.",
    content: "blog/paginas/post-13.md",
    format: "md",
    contentBody: `Você conversou com oito usuários, transcreveu horas de áudio, preencheu dezenas de post-its no FigJam e montou um relatório impecável de 55 slides explicando metodologia, perfil demográfico e citações completas. Na hora da apresentação, o PM olha o relógio, o tech lead pede um resumo de o que muda na segunda-feira e o PDF bonito acaba esquecido em uma pasta do Drive.

Pesquisa só gera valor quando ajuda o time a tomar uma **decisão melhor agora** — e síntese boa é justamente saber o que cortar para que o essencial apareça.

## Comece pelas respostas, não pelo histórico do processo

Quem trabalha em produto precisa entender rapidamente o que foi descoberto e qual o impacto disso no negócio ou na experiência. Deixe os detalhes longos de roteiro e perfil completo para o apêndice (ou um link separado) e abra direto com:

1. **A pergunta que motivou a pesquisa** (o que precisávamos descobrir).
2. **Os 3 a 5 achados principais** que realmente mudam o rumo do produto.
3. **Evidências concretas** (uma fala marcante, um trecho curto de vídeo ou número de recorrência).
4. **Próximos passos sugeridos** para design, produto e engenharia discutirem juntos.

## Agrupe por padrão de comportamento, não por pergunta do roteiro

Um erro bem comum na síntese é organizar o resumo seguindo a ordem das perguntas da entrevista (*"Na pergunta 1, 60% disseram X..."*). Isso quebra a história e esconde a raiz do problema.

Prefira juntar as observações por **comportamento ou dor real** através de um diagrama de afinidades simples:

- Onde as pessoas perdem tempo hoje?
- Quais gambiarras elas criam fora do sistema?
- O que impede alguém de confiar na solução atual?

Se seis em cada oito pessoas comentaram que tiram print da tela porque não confiam que o comprovante fica salvo no app, esse é um achado fortíssimo — mesmo que ninguém tenha perguntado diretamente sobre comprovantes no início do roteiro.

> Um trecho de 25 segundos com um usuário tentando achar um botão e desistindo convence mais uma liderança ocupada do que dez gráficos sem contexto.

## Priorize o que precisa de ação imediata

Nem toda descoberta tem o mesmo peso. Separar os achados ajuda o time a não paralisar diante de uma lista infinita de problemas:

- **Bloqueadores críticos:** impedem a pessoa de concluir a tarefa ou geram erro grave (prioridade máxima).
- **Atritos recorrentes:** deixam o caminho lento ou confuso, mas a pessoa ainda consegue terminar.
- **Ideias de evolução:** oportunidades legais que não são urgentes agora, mas entram no radar do roadmap.

Para organizar esses achados em um repositório vivo que todo o time possa consultar depois sem depender de PDFs perdidos, vale conhecer ideias práticas no guia do [Nielsen Norman Group sobre Research Repositories](https://www.nngroup.com/articles/research-repositories/).

## Feche com uma oficina curta de decisão

Em vez de mandar o relatório por e-mail e torcer para alguém ler, marque uma conversa de 30 minutos com PM, design e engenharia. Apresente os achados principais em 10 minutos e use os outros 20 para responder juntos: *"diante disso, o que entra já na próxima entrega e o que vamos testar em seguida?"*. Pesquisa que termina com dono e prazo nunca morre na gaveta.`
  },
  {
    id: "post-1",
    slug: "cafes-brasilia",
    title: "Café e Frame: As melhores cafeterias para trabalhar em Brasília",
    subtitle: "Uma seleção da comunidade para você encontrar o ambiente perfeito para focar e ser criativo.",
    category: "Dicas Locais",
    date: "26 de Setembro, 2025",
    image: "/blog/imagens/cafes.jpg",
    imageAlt: "Designer trabalhando no notebook ao lado de uma xícara de café expresso e caderno de anotações em cafeteria iluminada de Brasília",
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

