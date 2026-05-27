# 📅 Sistema de Gestão de Eventos

## Como Usar

O sistema de eventos foi reformulado para facilitar a adição de novos eventos. Agora você só precisa editar um arquivo JSON!

### 📁 Arquivos Principais

- **`events.json`** — Arquivo com todos os dados dos eventos (editar aqui!)
- **`events-loader.js`** — Script que lê o JSON e renderiza os cards
- **`index.html`** — Página principal (grid vazio que será preenchido dinamicamente)

---

## 🆕 Adicionando Novos Eventos

Abra o arquivo `events.json` e adicione um novo objeto no array do ano desejado:

### Estrutura de um Evento

```json
{
  "date": "04 — Setembro",
  "status": "realizado",
  "title": "O impacto da visão de negócio na experiência do usuário",
  "local": "Museu Nacional",
  "hora": "",
  "color": "yellow",
  "linkType": "photos",
  "linkUrl": "https://..."
}
```

### 🎨 Propriedades

| Propriedade | Tipo | Valores Possíveis | Descrição |
|------------|------|------------------|-----------|
| `date` | string | ex: "04 — Setembro" | Data do evento |
| `status` | string | `"realizado"` ou `"em breve"` | Status do evento |
| `title` | string | Qualquer texto | Título do evento |
| `local` | string | ex: "Museu Nacional", "Online" | Local ou tipo de evento |
| `hora` | string | ex: "15H" ou "" | Hora do evento (deixe vazio se não tiver) |
| `color` | string | `"yellow"`, `"pink"`, `"blue"`, `"green"`, `"white"` | Cor do card |
| `linkType` | string | `"photos"`, `"video"`, `"tickets"` ou `null` | Tipo de link |
| `linkUrl` | string | URL completa ou `null` | URL do link |

---

## 🎯 Exemplos

### Evento com Fotos
```json
{
  "date": "15 — Maio",
  "status": "realizado",
  "title": "Workshop de Prototipagem",
  "local": "Museu Nacional",
  "hora": "14H",
  "color": "pink",
  "linkType": "photos",
  "linkUrl": "https://drive.google.com/drive/folders/..."
}
```

### Evento com Vídeo
```json
{
  "date": "20 — Maio",
  "status": "realizado",
  "title": "Design Thinking Live",
  "local": "Online",
  "hora": "20H",
  "color": "blue",
  "linkType": "video",
  "linkUrl": "https://www.youtube.com/live/..."
}
```

### Evento com Ingressos
```json
{
  "date": "25 — Maio",
  "status": "em breve",
  "title": "UX Conference 2026",
  "local": "Centro de Convenções",
  "hora": "",
  "color": "yellow",
  "linkType": "tickets",
  "linkUrl": "https://www.sympla.com.br/..."
}
```

### Evento sem Link
```json
{
  "date": "30 — Maio",
  "status": "em breve",
  "title": "Encontro da Comunidade",
  "local": "Brasília",
  "hora": "",
  "color": "green",
  "linkType": null,
  "linkUrl": null
}
```

---

## 🎨 Cores Disponíveis

- **`yellow`** — Amarelo
- **`pink`** — Rosa
- **`blue`** — Azul
- **`green`** — Verde
- **`white`** — Branco/Cinza claro

---

## 📋 Checklist para Adicionar um Novo Evento

- [ ] Adicione o objeto do evento no array do ano correto em `events.json`
- [ ] Preencha `date` (ex: "15 — Maio")
- [ ] Defina `status` como `"em breve"` ou `"realizado"`
- [ ] Escreva o `title` do evento
- [ ] Indique o `local` (ex: "Museu Nacional", "Online", "Presencial")
- [ ] Se tiver hora, preencha `hora` (ex: "14H") ou deixe em branco
- [ ] Escolha uma `color` para o card
- [ ] Defina o `linkType` (`"photos"`, `"video"`, `"tickets"` ou `null`)
- [ ] Cole a URL no `linkUrl` (ou deixe como `null` se não tiver link)
- [ ] Salve o arquivo `events.json`
- [ ] A página atualizará automaticamente!

---

## 🚀 Pronto!

Pronto! Os cards serão renderizados automaticamente organizados por ano, do mais recente para o mais antigo.

**Dica:** Os eventos aparecem em ordem decrescente de ano, então 2026 aparece antes de 2025.
