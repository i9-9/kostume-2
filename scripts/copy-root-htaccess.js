#!/usr/bin/env node
/**
 * Next static export solo copia public/ → out/.htaccess cuando está en public/.
 * Si mantenés .htaccess en la raíz del repo, este script lo pone en out/ tras el build.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, '.htaccess');
const dest = path.join(root, 'out', '.htaccess');

if (!fs.existsSync(src)) {
  console.log('[copy-root-htaccess] Sin .htaccess en la raíz del repo → no se copia.');
  process.exit(0);
}

fs.copyFileSync(src, dest);
console.log('[copy-root-htaccess] Copiado .htaccess → out/.htaccess');
