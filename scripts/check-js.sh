#!/usr/bin/env bash
# Hook PostToolUse: valida a sintaxe do JavaScript inline do index.html
# Só age quando o arquivo editado foi o index.html. Sai 0 se nada a fazer.
cd "$(dirname "$0")/.." || exit 0

input="$(cat 2>/dev/null || true)"
file=""
if [ -n "$input" ]; then
  file="$(printf '%s' "$input" | python3 -c 'import sys,json
try:
  d=json.load(sys.stdin)
  print(d.get("tool_input",{}).get("file_path",""))
except Exception:
  print("")' 2>/dev/null)"
fi

case "$file" in
  index.html|./index.html|*/index.html) : ;;
  *) exit 0 ;;
esac

command -v node >/dev/null 2>&1 || { echo "[check-js] node não encontrado — pulando."; exit 0; }
command -v python3 >/dev/null 2>&1 || { echo "[check-js] python3 não encontrado — pulando."; exit 0; }

python3 - <<'PY' || exit 0
import re
html = open("index.html", encoding="utf-8").read()
m = re.findall(r"<script>(.*?)</script>", html, re.S)
open("/tmp/verdeesal-index.js", "w", encoding="utf-8").write("\n".join(m))
PY

if node --check /tmp/verdeesal-index.js; then
  echo "[check-js] JS do index.html OK"
else
  echo "[check-js] ERRO de sintaxe no JS inline do index.html — corrija antes de seguir."
  exit 1
fi
