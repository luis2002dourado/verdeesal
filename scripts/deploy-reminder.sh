#!/usr/bin/env bash
# Hook Stop: lembra de publicar caso haja mudanças não commitadas.
cd "$(dirname "$0")/.." || exit 0

if [ -n "$(git status --porcelain 2>/dev/null)" ]; then
  echo ""
  echo "⚠️  Há mudanças não commitadas. Lembre de publicar:"
  echo "    git add -A && git commit -m \"...\" && git push origin main"
  echo "    depois confira: https://luis2002dourado.github.io/verdeesal/"
  echo ""
fi
exit 0
