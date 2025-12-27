const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_IMG_DIR = path.join(__dirname, '../public/img');

// Quality settings - high quality but smaller file size
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;
const MAX_WIDTH = 1920; // Max width for images
const MAX_HEIGHT = 2400; // Max height for images

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stats = fs.statSync(filePath);
  const originalSize = stats.size;
  
  // Skip if already small (less than 200KB)
  if (originalSize < 200 * 1024) {
    console.log(`⏭️  Skipping ${path.basename(filePath)} (already small: ${(originalSize / 1024).toFixed(0)}KB)`);
    return { skipped: true };
  }

  try {
    let image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Resize if too large
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      image = image.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    let buffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      buffer = await image
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer();
    } else if (ext === '.png') {
      buffer = await image
        .png({ quality: PNG_QUALITY, compressionLevel: 9 })
        .toBuffer();
    } else {
      console.log(`⏭️  Skipping ${path.basename(filePath)} (unsupported format)`);
      return { skipped: true };
    }

    // Only save if smaller
    if (buffer.length < originalSize) {
      fs.writeFileSync(filePath, buffer);
      const savings = ((1 - buffer.length / originalSize) * 100).toFixed(1);
      console.log(`✅ ${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(buffer.length / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
      return { 
        original: originalSize, 
        optimized: buffer.length,
        saved: originalSize - buffer.length 
      };
    } else {
      console.log(`⏭️  Skipping ${path.basename(filePath)} (already optimal)`);
      return { skipped: true };
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
    return { error: true };
  }
}

async function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await walkDir(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  
  return fileList;
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  const files = await walkDir(PUBLIC_IMG_DIR);
  console.log(`Found ${files.length} images to process\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let totalSaved = 0;
  let optimizedCount = 0;
  
  for (const file of files) {
    const result = await optimizeImage(file);
    if (result && !result.skipped && !result.error) {
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      totalSaved += result.saved;
      optimizedCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Images optimized: ${optimizedCount}`);
  console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  if (totalOriginal > 0) {
    console.log(`   Compression: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  }
}

main().catch(console.error);


