Muita gente ainda encara o *handoff* como aquele momento em que o designer joga o link do Figma no Slack na sexta-feira à tarde, escreve *"telas prontas!"* e some até a próxima semana. Na segunda de manhã, o time de desenvolvimento abre o arquivo e dá de cara com quinze variações quase idênticas da mesma página, camadas sem nome e zero explicação do que acontece quando a lista estiver vazia.

Quando o arquivo do Figma não ajuda quem vai programar, o preço aparece em forma de dúvidas picadas o dia inteiro, código improvisado e telas finais bem diferentes do planejado.

## Separe o parquinho da área de entrega

Todo projeto precisa de espaço para rascunhar ideias tortas, testar alternativas e guardar coisas descartadas. O problema começa quando esses rascunhos ficam misturados com a versão oficial aprovada para desenvolvimento.

Crie uma divisão simples e previsível nas páginas do arquivo:

- **`✅ Pronto para Dev`:** só o que está revisado, aprovado e vai entrar na sprint.
- **`🚧 Em andamento`:** telas em construção e exploração atual.
- **`🗄️ Arquivo / Histórico`:** versões antigas mantidas só para consulta.

Essa separação simples já evita que alguém implemente uma tela de duas semanas atrás por engano.

## Mostre os caminhos reais além da tela perfeita

Para quem vai escrever o código, a tela estática com dados ideais conta só metade da história. Deixe explícito no próprio canvas (ou em seções dedicadas logo ao lado):

- Como a interface se comporta no **desktop, tablet e celular** (especialmente onde colunas quebram ou menus recolhem).
- Quais são os **estados de interação**: botão normal, hover, foco, carregando e erro.
- O que aparece quando **não há nenhum dado cadastrado** ou quando o texto vem bem maior do que o esperado.

Use a ferramenta de **Sections** (`Shift + S`) no Figma para agrupar fluxos por jornada e mande sempre o link direto para a seção certa no card da tarefa — ninguém merece ficar caçando onde está a tela perdida em um canvas infinito. Para recursos específicos de inspeção, vale compartilhar com o time o guia do [Figma Dev Mode](https://www.figma.com/dev-mode/).

> Handoff não é passagem de bastão em que um lado termina e o outro começa; é uma conversa curta que evita metade das reuniões de correção depois.

## Faça um alinhamento de 15 minutos antes da sprint começar

Mesmo o arquivo mais organizado do mundo não substitui quinze minutos de conversa ao vivo antes de a tarefa entrar em desenvolvimento. Mostre o fluxo clicando rápido pelo protótipo, aponte regras de negócio escondidas (*"se o usuário não tiver plano ativo, esse card nem aparece"*) e deixe o dev perguntar logo de cara o que pode ser simplificado.

Muitas vezes, nessa conversa curta, o time descobre que uma animação ou filtro complexo levaria três dias extras de código e pode ser resolvido de um jeito muito mais simples sem perder valor para o usuário. Todo mundo ganha tempo — e o produto final sai muito mais fiel ao desenho.
