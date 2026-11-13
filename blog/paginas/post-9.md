Existe um momento clássico em que a palavra "Design System" começa a aparecer em toda reunião de produto: o time cresceu um pouco, existem três telas de cadastro diferentes no ar, cada botão tem um arredondamento próprio e o front-end já não sabe qual tom de cinza é o oficial.

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

Um Design System não vive dentro do Figma — ele vive quando **design e código falam a mesma língua**. Se no Figma o botão se chama `Btn/Green/Outline` e no repositório de front-end se chama `SecondaryActionButton`, toda alteração vira retrabalho de tradução.

Antes de fechar a primeira versão dos seus componentes base:

- Sente meia hora com quem desenvolve o front-end para alinhar os nomes de cores, espaçamentos e variantes.
- Garanta que cada componente tenha os estados reais de interação (hover, foco por teclado, carregando, erro) e não só a aparência parada.
- Combine uma regra simples de manutenção: toda peça nova só entra na biblioteca oficial depois de ser usada de verdade em pelo menos uma entrega de produto.

Começar enxuto dá fôlego para evoluir o sistema junto com o produto real — sem virar gargalo nem obra inacabada.
