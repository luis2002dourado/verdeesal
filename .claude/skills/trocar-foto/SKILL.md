---
name: trocar-foto
description: Substitui uma foto do site (hero, roupas, semijoias, pratas, acessorios, sobre) por uma imagem nova, otimizando e recortando em 4:5 antes de publicar. Use quando o usuário enviar uma foto nova.
disable-model-invocation: true
---

# Trocar foto do site

## Passos

1. **Identifique o slot** para onde a foto vai:
   - `assets/hero.jpg` → imagem principal (hero)
   - `assets/roupas.jpg`, `assets/semijoias.jpg`, `assets/pratas.jpg`, `assets/acessorios.jpg` → cards de categoria
   - `assets/sobre.jpg` → seção "Sobre"

2. **Guarde o original** em `assets/fotos-reais/` (mantém o arquivo enviado intacto).

3. **Otimize + recorte em 4:5** com Pillow:
   ```bash
   python3 - <<'EOF'
   from PIL import Image, ImageOps
   src = "assets/fotos-reais/NOVA.jpg"     # caminho da foto
   dst = "assets/<slot>.jpg"               # slot de destino
   im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
   w, h = im.size
   alvo = 4/5
   if w/h > alvo:                          # larga demais → corta laterais
       nw = int(h*alvo); x0 = (w-nw)//2; im = im.crop((x0, 0, x0+nw, h))
   else:                                   # alta demais → corta topo/base
       nh = int(w/alvo); y0 = (h-nh)//2; im = im.crop((0, y0, w, y0+nh))
   if im.width > 1000:
       im = im.resize((1000, int(im.height*1000/im.width)), Image.LANCZOS)
   im.save(dst, "JPEG", quality=84, optimize=True, progressive=True)
   EOF
   ```
   (o `hero.jpg` pode ficar até 1400px de largura.)

4. **Atualize o `alt`** no `index.html` se o conteúdo da foto mudou.

5. **Publique** (use a skill `deploy-site` ou rode os comandos de commit+push).

## Observações
- Fotos de produto devem ser **reais** (do Instagram da loja), nunca geradas.
- Cuidado com os cards flutuantes do hero: não cobrir o rosto de quem aparece.
