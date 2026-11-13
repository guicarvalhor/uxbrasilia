Quando o assunto é acessibilidade digital, muita gente ainda imagina algo distante, técnico demais ou exclusivo para um público muito específico. Na prática, acessibilidade aparece no celular sob o sol forte da Asa Sul, em alguém segurando o telefone com uma mão só no metrô, em quem usa leitor de tela ou em quem prefere navegar pelo teclado sem usar mouse.

E o melhor: boa parte dos problemas mais comuns pode ser evitada ainda na etapa de design, com ajustes simples que deixam a experiência melhor para todo mundo.

## 1. Contraste de texto e botão de verdade

Texto cinza-clarinho sobre fundo branco pode até parecer "suave" no monitor calibrado do escritório, mas desaparece completamente em telas simples ou sob luz natural.

Adote como hábito conferir o contraste antes de aprovar qualquer paleta: texto normal precisa atingir pelo menos **4,5:1** de contraste contra o fundo, e títulos grandes ou elementos gráficos precisam de pelo menos **3:1**. Ferramentas gratuitas como o [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) levam dez segundos para testar e evitam dor de cabeça lá na frente.

## 2. Área de toque generosa no celular

Botões minúsculos de `28px` ou ícones de fechar espremidos no canto funcionam com a pontinha do cursor do mouse, mas viram frustração garantida no polegar.

Mantenha botões, links isolados, abas e ícones clicáveis com área interativa mínima em torno de **44x44px** — mesmo quando o desenho visual do ícone for menor, a área clicável em volta deve ser confortável.

## 3. Rótulos reais nos campos (nada de depender só de placeholder)

Usar o texto dentro da caixa do input (`"Digite seu e-mail"`) como único identificador parece econômico visualmente, mas falha feio assim que a pessoa começa a digitar e perde a referência do que o campo pedia. Além disso, placeholders costumam ter contraste baixo por padrão nos navegadores.

Coloque sempre um `<label>` visível e permanente acima do campo, e deixe o placeholder apenas para exemplo de formato quando ajudar de verdade.

## 4. Nunca dependa só da cor para dar aviso

Se um formulário falhou e a única mudança foi pintar a borda do campo de vermelho, quem tem daltonismo — ou quem está vendo a tela com brilho baixo — não entende o que aconteceu.

Sempre combine cor com outro sinal claro: ícone de alerta e uma mensagem objetiva explicando o erro logo abaixo do campo (*"Informe um CPF com 11 dígitos"*).

> Acessibilidade não é uma camada extra colocada no fim do projeto para cumprir tabela; é qualidade básica de interface bem feita.

## 5. Ordem lógica de foco para quem usa teclado

Muita gente navega usando `Tab`, `Shift + Tab`, `Enter` e setas — seja por preferência, lesão temporária no punho ou uso de tecnologias assistivas. Vale sempre conferir no handoff:

- O estado de foco (`:focus-visible`) está claramente visível nos botões, links e menus?
- A ordem de navegação ao apertar `Tab` segue a leitura natural de cima para baixo e da esquerda para a direita?
- Quando um modal abre, o foco vai para dentro dele e volta para o botão de origem ao fechar?

## 6. Textos alternativos que informam de verdade

Ao definir imagens no projeto, evite descrições robóticas ou vazias. Se a foto ilustra um artigo ou mostra informação importante, escreva um `alt` curto e descritivo do que importa naquela cena. Se for apenas um grafismo decorativo de fundo, sinalize para ser ignorado por leitores de tela (`alt=""` ou `aria-hidden="true"`).

Pequenos cuidados como esses não atrasam entrega nenhuma — só tornam o produto mais humano, legível e respeitoso com quem usa. Se quiser consultar as referências oficiais, o [guia rápido das diretrizes WCAG da W3C](https://www.w3.org/WAI/standards-guidelines/wcag/) é o melhor ponto de partida.
