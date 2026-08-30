# Verde &amp; Sal — Site institucional

Landing page da loja **Verde &amp; Sal** (@verdeesal) — roupas, semijoias, pratas e acessórios femininos, em Presidente Dutra (MA), com envio para todo o Brasil.

- **Tecnologia:** HTML + CSS + JS puro (sem build, sem dependências).
- **Hospedagem:** GitHub Pages.
- **Paleta:** extraída do logo da loja (verde-sálvia `#85A387` + dourado `#DBBE75`).

---

## 🔧 Como editar o número de WhatsApp

Abra o `index.html`, procure pelo bloco `CONFIG` no final do arquivo:

```js
var CONFIG = {
  whatsapp: "556699309063", // (66) 9930-9063 — só dígitos, com DDI 55
  instagram: "https://www.instagram.com/verdeesal",
  instagramDm: "https://ig.me/m/verdeesal"
};
```

Se o campo `whatsapp` estiver vazio, todos os botões de pedido abrem o **Direct do Instagram**.

---

## 🎨 MCPs configurados

### @colorsandfonts/mcp (paletas de cores)

Configuração já incluída no arquivo `.mcp.json` deste repositório:

```json
{
  "mcpServers": {
    "colorsandfonts": {
      "command": "npx",
      "args": ["-y", "@colorsandfonts/mcp"]
    }
  }
}
```

No Claude Code, use o formato TOML (`.claude.json` / config do client):

```toml
[mcp_servers.colorsandfonts]
command = "npx"
args = ["-y", "@colorsandfonts/mcp"]
```

Ele gera e visualiza escalas de cor em **Tailwind, SCSS e CSS** (UI interativa). O site já usa a paleta extraída do logo, então só é necessário se quiser gerar novas escalas no futuro.

---

## 📸 Imagens e logo

| Arquivo | O que é |
|---|---|
| `assets/logo.png` | **Logo oficial** (fundo removido, transparente) — usado no header e rodapé |
| `assets/logo-badge.png` | Logo em selo verde arredondado |
| `assets/favicon.png` | Ícone do site |
| `assets/hero.jpg` … `assets/acessorios.jpg` | **Placeholders ilustrativos (IA)** — substituir pelas fotos oficiais |

Para trocar as fotos, substitua os arquivos em `assets/` mantendo os mesmos nomes.

---

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `verdeesal`).
2. Envie os arquivos:

```bash
cd site
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/verdeesal.git
git push -u origin main
```

3. No repositório: **Settings → Pages → Source: `Deploy from a branch` → branch `main`, pasta `/ (root)` → Save**.
4. O site fica em `https://SEU-USUARIO.github.io/verdeesal/`.
