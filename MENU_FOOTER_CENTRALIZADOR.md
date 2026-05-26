# 🎯 Menu e Footer Centralizador

## O que foi feito?

Criamos um sistema centralizador de menu e footer que permite gerenciar todos os links e informações de **um único lugar**. Agora, quando você precisar mudar, adicionar ou remover um item, as mudanças se aplicam automaticamente em **todas as páginas**.

---

## 📁 Arquivo Principal

**`menu-footer.js`** — Este é o arquivo mágico! 

Ele contém:
- ✅ Configuração do menu
- ✅ Configuração do footer
- ✅ Lógica de injeção dinâmica
- ✅ Detecção de página ativa

---

## 🛠️ Como Fazer Mudanças

### 1. **Adicionar um novo item no menu**

Abra o arquivo `menu-footer.js` e procure por:

```javascript
const menuConfig = {
    brand: { ... },
    links: [
        { href: "/", label: "Página inicial", id: "link-home" },
        { href: "/voluntariado.html", label: "Voluntariado", id: "link-voluntariado" },
        // ... mais links
    ]
};
```

Para adicionar um novo item, insira uma linha nova no array `links`:

```javascript
{ href: "/novo-page.html", label: "Nova Página", id: "link-nova" }
```

**Pronto!** O novo link aparecerá em **todas as páginas** automaticamente.

---

### 2. **Remover um item do menu**

Procure o link no array `links` e **delete a linha inteira**. Automaticamente desaparece de todos os lugares.

---

### 3. **Mudar o rótulo de um link**

Encontre o item no array `links` e altere o valor de `label`:

```javascript
// Antes:
{ href: "/blog.html", label: "Blog", id: "link-blog" }

// Depois:
{ href: "/blog.html", label: "Artigos e Notícias", id: "link-blog" }
```

---

### 4. **Alterar o footer**

Procure por `footerConfig` no arquivo:

```javascript
const footerConfig = {
    brand: { ... },
    columns: [
        {
            title: "Comunidade",
            links: [ ... ]
        },
        {
            title: "Nossas redes",
            links: [ ... ]
        }
    ],
    copyright: "© 2025 UXBrasília. Todos os direitos reservados."
};
```

Para adicionar um novo link no footer:
- Localize a coluna onde quer adicionar
- Insira um novo objeto no array `links` daquela coluna

Exemplo adicionando um novo link em "Comunidade":

```javascript
{
    title: "Comunidade",
    links: [
        { href: "/voluntariado.html", label: "Voluntariado" },
        { href: "/catalogo.html", label: "Lojinha" },
        { href: "/blog.html", label: "Blog" },
        { href: "/novo.html", label: "Novo Item" }  // ← Adicionado!
    ]
}
```

---

## 📱 Páginas Atualizadas

Todas as seguintes páginas agora usam o sistema centralizador:

✅ **Raiz:**
- index.html
- blog.html
- catalogo.html
- contato.html
- decola.html
- parceiros.html
- voluntariado.html

✅ **Blog (/blog/paginas/):**
- post-1.html
- post-2.html
- post-template.html

✅ **Loja (/loja/):**
- produto.html
- camiseta.html
- obrigado.html

---

## ⚡ Como o Sistema Funciona

1. **Cada página** tem dois containers vazios:
   - `<div id="menu-container"></div>` — onde o menu é injetado
   - `<div id="footer-container"></div>` — onde o footer é injetado

2. **Quando a página carrega**, o arquivo `menu-footer.js`:
   - Lê as configurações de `menuConfig` e `footerConfig`
   - Renderiza o menu dinamicamente
   - Renderiza o footer dinamicamente
   - Detecta qual página está ativa e marca o link com `id="active"`

3. **Resultado:** Menu e footer consistentes em todas as páginas!

---

## 🎨 Detecção de Página Ativa

O sistema detecta automaticamente qual página está ativa e marca o link correspondente com `id="active"`. 

Por exemplo:
- Se você estiver em `/blog.html`, o link "Blog" ganha `id="active"`
- Se você estiver em `/catalogo.html`, o link "Lojinha" ganha `id="active"`

Isso é usado no CSS para destacar visualmente o link da página atual.

---

## 💡 Dicas Importantes

✅ **Sempre use caminhos absolutos** (começando com `/`) para os links

❌ Evite isso:
```javascript
{ href: "blog.html", label: "Blog" }
```

✅ Faça assim:
```javascript
{ href: "/blog.html", label: "Blog" }
```

---

## 🔧 APIs Disponíveis

Se precisar acessar as configurações via JavaScript:

```javascript
// Obter a configuração atual do menu
const menuAtual = window.menuFooter.getConfig('menu');

// Obter a configuração atual do footer
const footerAtual = window.menuFooter.getConfig('footer');

// Atualizar menu dinamicamente
window.menuFooter.updateConfig('menu', novaConfiguracaoMenu);

// Atualizar footer dinamicamente
window.menuFooter.updateConfig('footer', novaConfiguracaoFooter);
```

---

## ❓ Dúvidas Frequentes

**P: Se eu mudar o menu-footer.js, quando as mudanças aparecem?**
R: Recarregue qualquer página no navegador. As mudanças são aplicadas automaticamente!

**P: Posso ter menus diferentes em diferentes páginas?**
R: Sim! Use a função `window.menuFooter.updateConfig()` para customizar por página.

**P: O que acontece se eu deletar um item por acidente?**
R: Ele desaparece de todas as páginas. Basta adicionar novamente!

**P: Como adiciono um submenu?**
R: Atualmente o sistema não suporta submenus. Se precisar, me avise!

---

## 📝 Resumo Rápido

| Ação | Arquivo | Onde |
|------|---------|------|
| Adicionar link | `menu-footer.js` | Array `links` em `menuConfig` |
| Remover link | `menu-footer.js` | Array `links` em `menuConfig` |
| Mudar rótulo | `menu-footer.js` | Campo `label` em `menuConfig` |
| Alterar footer | `menu-footer.js` | `footerConfig` |
| Mudar copyright | `menu-footer.js` | Campo `copyright` em `footerConfig` |

---

🎉 **Pronto!** Agora você tem um menu e footer 100% centralizados!
