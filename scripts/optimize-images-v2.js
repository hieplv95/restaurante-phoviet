import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

// Precise target sizes for mobile-first high performance
const resizeRules = {
  // Hero image: display max 420x420, target 450x450
  'hero_phobo_3d.webp': { width: 450, height: 450, quality: 72 },
  'hero_bunbohue.webp': { width: 450, height: 450, quality: 72 },
  
  // About image: display max 412x412, target 480x480
  'about_buncha.webp': { width: 480, height: 480, quality: 70 },
  
  // Logo
  'logo_hat.webp': { width: 80, height: 80, quality: 80 },
  'logo.webp': { width: 80, height: 80, quality: 80 },
  'logo_full.webp': { width: 160, height: 160, quality: 80 },
  'logo_phoviet.webp': { width: 160, height: 160, quality: 80 },
  'logo-share.webp': { width: 1200, height: 630, quality: 80 },
  'logo_cungdinhhue.webp': { width: 320, height: 320, quality: 75 },
};

function getResizeConfig(relativePath) {
  const basename = path.basename(relativePath);
  if (resizeRules[basename]) return resizeRules[basename];
  // Menu items: display max 144x144, 160x160 is sharp & ultralight (~2-4KB)
  if (basename.startsWith('menu_')) return { width: 160, height: 160, quality: 72 };
  if (relativePath.includes('reviews/') || relativePath.includes('reviews\\')) return { width: 160, height: 160, quality: 70 };
  return null;
}

async function processFile(filePath, relativePath) {
  const config = getResizeConfig(relativePath);
  if (!config) return;

  try {
    const inputBuffer = fs.readFileSync(filePath);
    const metadata = await sharp(inputBuffer).metadata();
    const oldSize = inputBuffer.length;
    
    const outputBuffer = await sharp(inputBuffer)
      .resize(config.width, config.height, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality: config.quality, effort: 6 })
      .toBuffer();
    
    fs.writeFileSync(filePath, outputBuffer);
    
    const savedPercent = (((oldSize - outputBuffer.length) / oldSize) * 100).toFixed(1);
    console.log(`[Optimized] ${relativePath}: ${metadata.width}x${metadata.height} → ≤${config.width}x${config.height} | ${(oldSize/1024).toFixed(1)} KB → ${(outputBuffer.length/1024).toFixed(1)} KB (${savedPercent > 0 ? '−' + savedPercent : '+' + Math.abs(savedPercent)}%)`);
  } catch (err) {
    console.error(`Error: ${relativePath}:`, err.message);
  }
}

async function walkDir(dir, baseDir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
    if (entry.isDirectory()) {
      await walkDir(fullPath, baseDir);
    } else if (entry.name.endsWith('.webp')) {
      await processFile(fullPath, relativePath);
    }
  }
}

console.log('Optimizing all images to exact display dimensions...\n');
await walkDir(publicDir, publicDir);
console.log('\nAll images perfectly optimized!');
