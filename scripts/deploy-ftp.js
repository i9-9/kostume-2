#!/usr/bin/env node
/**
 * Deploy via FTP: build → borrar todo excepto .htaccess → subir out/
 * Requiere .env.deploy con FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_PATH
 */

const { Client } = require('basic-ftp');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');

function loadEnv() {
  const envPath = path.join(ROOT, '.env.deploy');
  if (!fs.existsSync(envPath)) {
    console.error('❌ Crea .env.deploy con FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_PATH');
    process.exit(1);
  }
  const content = fs.readFileSync(envPath, 'utf8');
  const env = {};
  content.split('\n').forEach((line) => {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
  });
  return env;
}

async function deploy() {
  const env = loadEnv();
  const { FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_PATH } = env;
  if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD || !FTP_PATH) {
    console.error('❌ Faltan FTP_HOST, FTP_USER, FTP_PASSWORD o FTP_PATH en .env.deploy');
    process.exit(1);
  }

  console.log('📦 Building...');
  execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });

  const outDir = path.join(ROOT, 'out');
  if (!fs.existsSync(outDir)) {
    console.error('❌ No existe la carpeta out/');
    process.exit(1);
  }

  const client = new Client(60000);
  try {
    console.log('🔌 Conectando por FTP...');
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASSWORD,
      secure: false,
    });

    await client.cd(FTP_PATH);
    const list = await client.list();
    const toRemove = list.filter((f) => f.name !== '.htaccess');
    if (toRemove.length > 0) {
      console.log(`🗑️  Borrando ${toRemove.length} items (excepto .htaccess)...`);
      const files = toRemove.filter((f) => !f.isDirectory);
      const dirs = toRemove.filter((f) => f.isDirectory);
      for (const f of files) await client.remove(f.name);
      for (const d of dirs) await client.removeDir(d.name);
    }

    console.log('🚀 Subiendo archivos...');
    await client.uploadFromDir(outDir);
    console.log('✅ Deploy completo!');
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
