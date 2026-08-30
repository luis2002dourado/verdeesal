# CLAUDE.md — Verde & Sal (site institucional)

Memória do projeto para o Claude Code. Leia antes de mexer em qualquer coisa.

## O que é
Landing page institucional da loja **Verde & Sal** (@verdeesal) — roupas, semijoias,
pratas e acessórios femininos, em Presidente Dutra (MA), com envio para todo o Brasil.

## Stack e estrutura
- **HTML + CSS + JS vanilla** em um único `index.html` (styles e `<script>` inline). **Sem build, sem dependências.**
- Hospedagem: **GitHub Pages** — branch `main`, raiz do repositório.
- Arquivos:
  - `index.html` — todo o site (conteúdo, CSS, JS)
  - `assets/` — imagens usadas no site (hero.jpg, roupas.jpg, semijoias.jpg, pratas.jpg, acessorios.jpg, sobre.jpg, logo.png, favicon.png)
  - `assets/fotos-reais/` — **originais** enviadas pelo cliente (não são usadas direto)
  - `404.html`, `privacy.html`, `robots.txt`, `sitemap.xml` — SEO/acessibilidade
  - `.mcp.json` — MCP `colorsandfonts` (paletas)
  - `.claude/` — skills, agents e hooks deste projeto
  - `scripts/` — scripts auxiliares dos hooks

## Configuração da loja (crítica)
No fim do `index.html`, no bloco `CONFIG`:
```js
var CONFIG = {
  whatsapp: "556699309063", // (66) 9930-9063
  instagram: "https://www.instagram.com/verdeesal",
  instagramDm: "https://ig.me/m/verdeesal"
};
```
Se `whatsapp` estiver vazio, os botões apontam para o Direct do Instagram.
**Nunca** quebre esse bloco — ele controla todos os CTAs do site.

## Paleta e design (tokens)
Extraída do logo da loja (definida em `:root` no `index.html`):
- Verde-sálvia `#85a387` (fundo/apoio) · verde profundo `#4e6e52` (header/botões)
- Dourado do logo `#fdd254` (CTAs) · dourado profundo `#c9992e` (destaques)
- Creme "sal" `#f7f3e6` (fundo) · tinta `#2b3123` (texto)
- Fontes: Fraunces (display) + Inter (corpo) — via Google Fonts

Regras de design: mobile-first; easing oficial `--easeOut`/`--backOut`;
`prefers-reduced-motion` respeitado; `:focus-visible`; contraste AA; copy em PT-BR.

## Imagens (workflow)
- Fotos de produto/categoria: **reais** (do Instagram da loja).
- Ao trocar foto: otimizar com Pillow (máx. 1000px, qualidade ~84, sem EXIF) e **recortar em 4:5** (formato dos cards). Manter o mesmo nome de arquivo (`assets/<slot>.jpg`).
- Logo: `assets/logo.png` (PNG transparente, original). Não re-gerar.

## Publicar (deploy)
```bash
gh auth setup-git                      # se o push falhar com 403
git add -A && git commit -m "..." && git push origin main
```
Depois **verificar o rebuild** do Pages (pode levar ~1–2 min):
```bash
curl -s -o /dev/null -w "%{http_code}" https://luis2002dourado.github.io/verdeesal/
```
URL pública: https://luis2002dourado.github.io/verdeesal/

## Qualidade
- Após editar `index.html`, validar o JS inline: `node --check` (o hook em
  `.claude/settings.json` faz isso automaticamente).
- Nunca commitar segredos; tokens ficam fora do repo.
- Fotos com pessoas: cuidar para os cards flutuantes não cobrirem rostos.
