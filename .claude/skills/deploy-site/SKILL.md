---
name: deploy-site
description: Publica o site da Verde & Sal no GitHub Pages — commit, push e verificação do rebuild. Use quando o usuário pedir para "publicar", "subir" ou "colocar no ar".
disable-model-invocation: true
---

# Deploy do site

Fluxo padrão para publicar qualquer mudança no GitHub Pages.

## Passos

1. **Garanta credenciais do GitHub** (se o push der erro 403):
   ```bash
   gh auth setup-git
   ```

2. **Commit e push**:
   ```bash
   git add -A
   git commit -m "<descrição curta da mudança>"
   git push origin main
   ```

3. **Verifique o rebuild** (o Pages demora ~1–2 min; repita até HTTP 200):
   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" https://luis2002dourado.github.io/verdeesal/
   ```

4. **Confirme o conteúdo** (ex.: conferir se um trecho novo já apareceu):
   ```bash
   curl -s https://luis2002dourado.github.io/verdeesal/ | grep -o "trecho-esperado"
   ```

## Observações
- Branch é `main` (não `master`).
- Nunca commitar segredos/tokens.
- Se o conteúdo não atualizar, cheque se o commit chegou: `git log --oneline -3`.
