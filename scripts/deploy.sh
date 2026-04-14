#!/bin/bash
# Deploy script: build → zip → (optional) upload via rsync
# Uso: ./scripts/deploy.sh        → solo build + zip
#      ./scripts/deploy.sh upload → build + zip + subir a servidor

set -e
cd "$(dirname "$0")/.."

OUT_DIR="out"
ZIP_NAME="kostume-location-$(date +%Y%m%d-%H%M).zip"

echo "📦 Building..."
npm run build

echo "🗜️  Creating zip..."
cd "$OUT_DIR"
zip -r "../$ZIP_NAME" . -x "*.DS_Store"
cd ..

echo "✅ Zip created: $ZIP_NAME"
echo ""
echo "Sube $ZIP_NAME a cPanel → File Manager → public_html"
echo "Luego descomprime ahí (o sube el contenido de out/)"
echo ""

if [ "$1" = "upload" ]; then
  if [ -f ".env.deploy" ]; then
    source .env.deploy
    if [ -n "$DEPLOY_HOST" ] && [ -n "$DEPLOY_USER" ] && [ -n "$DEPLOY_PATH" ]; then
      echo "🚀 Uploading via rsync (preservando .htaccess)..."
      rsync -avz --delete --filter='protect .htaccess' "$OUT_DIR/" "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH"
      echo "✅ Deploy completo!"
    else
      echo "⚠️  Faltan DEPLOY_HOST, DEPLOY_USER o DEPLOY_PATH en .env.deploy"
      exit 1
    fi
  else
    echo "⚠️  Para subir: crea .env.deploy (usa .env.deploy.example como plantilla)"
    exit 1
  fi
fi
