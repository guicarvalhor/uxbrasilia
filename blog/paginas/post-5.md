Quem começa a mexer no Figma costuma passar por duas fases bem parecidas: primeiro coloca tudo solto dentro de um frame e sofre para alinhar cada card na mão; depois descobre o Auto Layout, aperta `Shift + A` em tudo ao mesmo tempo e vê o layout inteiro quebrar de um jeito misterioso.

Se isso já aconteceu com você, calma. O problema quase nunca é falta de prática com a ferramenta, e sim tentar usar todas as opções ao mesmo tempo sem entender a lógica por trás de três decisões simples.

## Pare de brigar com Fill, Hug e Fixed

Noventa por cento das dores de cabeça com Auto Layout nascem na largura e na altura dos elementos. Antes de sair clicando, responde uma pergunta rápida para cada caixa:

- **Fixed (fixo)** serve para o que não muda de tamanho com o conteúdo, como um ícone de `24px`, uma barra lateral ou uma altura fixa de cabeçalho.
- **Hug contents (abraçar conteúdo)** faz o container encolher ou crescer conforme o que está dentro. Funciona muito bem para botões, chips de filtro e textos curtos.
- **Fill container (preencher)** diz para o elemento ocupar todo o espaço disponível dentro do pai. Esse é o segredo para listas, cards responsivos e campos de formulário que precisam acompanhar a largura da tela sem quebrar.

Um erro clássico é deixar um texto longo em *Hug* dentro de um card estreito: o texto sai vazando pela lateral do frame. Mudar esse texto para **Fill container** resolve o problema em dois segundos e ainda força a quebra de linha automática.

## Comece de dentro para fora, nunca ao contrário

Quando você tenta aplicar Auto Layout primeiro na tela inteira para depois arrumar os cards lá dentro, o Figma tenta adivinhar a direção de tudo de uma vez. O resultado geralmente vira uma bagunça de frames invertidos.

O caminho mais tranquilo é montar de baixo para cima:

1. Agrupe primeiro ícone + texto de um botão (`Shift + A`).
2. Depois junte título + descrição de um card em coluna vertical.
3. Só então combine a imagem e o bloco de texto em um card completo.
4. Por último, organize a grade ou a página juntando os cards já estruturados.

Assim cada camada tem uma responsabilidade clara, fica fácil dar nomes decentes aos frames e qualquer pessoa do time entende a árvore de camadas sem precisar abrir dez pastas chamadas `Frame 482`.

> Auto Layout bom não é o que tem mais camadas aninhadas — é o que continua intacto quando você troca um título de duas palavras por um texto de três linhas.

## Espaçamentos consistentes e menos números quebrados

Quando cada card tem `13px` de padding de um lado e `18px` do outro, o arquivo vira um quebra-cabeça impossível de manter. Vale definir uma escala simples de espaçamentos — por exemplo múltiplos de 4 (`4, 8, 12, 16, 24, 32, 48`) — e guardar esses valores como **Variables** de número no Figma.

Além de deixar a interface visualmente mais calma, o time de front-end não precisa ficar conferindo se `15px` era intencional ou erro de arraste do mouse. Se quiser aprofundar nos recursos nativos, vale consultar o [guia oficial de Auto Layout no Figma Learn](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties).

## Teste o componente com conteúdo real antes de aprovar

Antes de mandar uma tela para revisão ou desenvolvimento, faça três testes rápidos direto no canvas:

- **Duplique o texto:** coloque um nome de usuário bem grande ou um título com duas linhas extras para ver se o card empurra os vizinhos direito.
- **Reduza a largura do frame principal:** simule uma tela de celular estreita (`360px`) e veja se botões e textos se adaptam sem cortar informação.
- **Esconda um elemento opcional:** desligue um subtítulo ou ícone para conferir se o espaço vazio some sozinho.

Se o layout sobreviver a esses três testes, ele está pronto para virar componente e seguir para o próximo passo do projeto.
