# Verde &amp; Sal — Site institucional

Landing page da loja **Verde &amp; Sal** (@verdeesal) — roupas, semijoias, pratas e acessórios femininos, em Presidente Dutra (MA), com envio para todo o Brasil.

- **Tecnologia:** HTML + CSS + JS puro (sem build, sem dependências).
- **Hospedagem:** GitHub Pages.
- **Arquivos:** `index.html` (site), `404.html`, `privacy.html`, `robots.txt`, `sitemap.xml`, `favicon.svg`, `assets/` (imagens).

---

## 🔧 Como editar o número de WhatsApp

Abra o `index.html`, procure pelo bloco `CONFIG` no final do arquivo e preencha:

```js
var CONFIG = {
  whatsapp: "", // ← cole aqui, ex.: "5599999999999" (DDI 55 + DDD + número, só dígitos)
  instagram: "https://www.instagram.com/verdeesal",
  instagramDm: "https://ig.me/m/verdeesal"
};
```

Enquanto o campo `whatsapp` estiver vazio, todos os botões de pedido abrem o **Direct do Instagram**.

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

---

## 📸 Imagens

As imagens em `assets/` são **ilustrativas (placeholders gerados por IA)**. Substitua pelos arquivos de mesmo nome para usar as fotos oficiais da loja:

| Arquivo | Onde aparece |
|---|---|
| `assets/hero.jpg` | Imagem principal (hero) e compartilhamento social (OG) |
| `assets/roupas.jpg` | Card "Roupas" |
| `assets/semijoias.jpg` | Card "Semijoias" |
| `assets/pratas.jpg` | Card "Pratas" |
| `assets/acessorios.jpg` | Card "Acessórios" + seção "Sobre" |
