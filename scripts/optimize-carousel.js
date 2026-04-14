const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "../public/img_carrousel_abr_14");
const OUTPUT_DIR = path.join(__dirname, "../public/img_carrousel_abr_14_opt");
const WIDTH = 1200;
const QUALITY = 88;

async function optimizeImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Optimizando ${files.length} imágenes → WebP ${WIDTH}px @${QUALITY}q\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputName = path.parse(file).name + ".webp";
    const outputPath = path.join(OUTPUT_DIR, outputName);

    const originalSize = fs.statSync(inputPath).size;

    await sharp(inputPath)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);

    totalOriginal += originalSize;
    totalOptimized += optimizedSize;

    console.log(
      `  ${file.padEnd(35)} ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024).toFixed(0)}KB  (-${reduction}%)`
    );
  }

  console.log(
    `\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB  (-${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%)`
  );
}

optimizeImages().catch(console.error);
