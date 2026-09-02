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
| `assets/logo.png` | **Logo oficial** (transparente) — header e rodapé |
| `assets/logo-badge.png` | Logo em selo verde arredondado |
| `assets/favicon.png` | Ícone do site |
| `assets/hero.jpg` | Look verde (destaque principal) |
| `assets/roupas.jpg` | Card "Roupas" |
| `assets/semijoias.jpg` | Card "Semijoias" |
| `assets/pratas.jpg` | Card "Pratas" |
| `assets/acessorios.jpg` | Card "Acessórios" |
| `assets/sobre.jpg` | Seção "Sobre" |
| `assets/fotos-reais/` | **Fotos originais enviadas** (não usadas diretamente no site) |

As fotos usadas no site são reais, vindas do Instagram @verdeesal. Para trocar
alguma, substitua o arquivo correspondente em `assets/` mantendo o mesmo nome.

---

## 🤖 Automações do Claude Code (configuração do projeto)

Configuração inspirada no plugin oficial `claude-code-setup` (análise + recomendações
de automação). Se você abrir este repositório no **Claude Code**, tudo já está pronto:

| Onde | O que faz |
|---|---|
| `CLAUDE.md` | Memória do projeto (stack, config, paleta, deploy) — o Claude lê automaticamente |
| `.claude/skills/deploy-site/` | Skill `/deploy-site` — publica no GitHub Pages (commit + push + verificação) |
| `.claude/skills/trocar-foto/` | Skill `/trocar-foto` — substitui foto do site (otimiza + recorta 4:5) |
| `.claude/agents/ui-reviewer.md` | Subagente revisor de acessibilidade/mobile |
| `.claude/agents/site-auditor.md` | Subagente que roda os checklists de SEO/segurança do playbook |
| `.claude/settings.json` | Hooks: valida JS após editar `index.html` + lembrete de deploy ao finalizar |
| `scripts/` | Scripts auxiliares dos hooks |
| `.claude/skills/design-taste-frontend/` | **Taste Skill v2** (Leonxlnx/taste-skill) — anti-slop de design: lê o brief, define direção visual, bane padrões genéricos de IA |
| `.claude/skills/design-taste-frontend-v1/` | **Taste Skill v1** (legacy, mesmo autor) — preservado para retrocompatibilidade |

### MCPs recomendados (instale no seu Claude Code, se quiser)

```bash
# Teste visual do site (screenshots desktop/mobile) antes de publicar
claude mcp add playwright -- npx @playwright/mcp@latest

# Operações no repositório GitHub (issues, PRs, actions)
claude mcp add github -- npx -y @modelcontextprotocol/server-github
```

---

## ☁️ Migrar para Cloudflare Pages (repo privado + domínio próprio + headers)

Vantagens sobre o GitHub Pages:
- **Repositório pode ficar privado** (no plano grátis)
- **Cabeçalhos de segurança** (arquivo `_headers` já incluído: CSP, HSTS, nosniff...)
- **Domínio próprio** fácil (e SSL automático)
- Cache e CDN globais

Passos:
1. Crie conta em https://dash.cloudflare.com/sign-up
2. Workers & Pages → Create → Pages → "Connect to Git"
3. Autorize o GitHub e escolha o repositório `verdeesal`
4. Build settings: framework = "None", build command = (vazio), output = `/` (raiz)
5. Deploy → o site fica em `https://verdeesal.pages.dev`
6. (Opcional) Adicione o domínio próprio na aba "Custom domains"
7. Depois que estiver no ar no Cloudflare, o repositório pode ser tornado **privado**
   (Settings → Danger Zone → Change visibility → Private) — o Cloudflare continua
   acessando via GitHub App.
8. Atualize as URLs do domínio (canonical, OG, sitemap, robots) para o novo endereço.

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
