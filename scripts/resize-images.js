import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

const resizeRules = {
  'hero_phobo_3d.webp': { width: 640, height: 640 },
  'hero_bunbohue.webp': { width: 640, height: 640 },
  'about_buncha.webp': { width: 720, height: 720 },
  'logo_hat.webp': { width: 120, height: 120 },
  'logo.webp': { width: 120, height: 120 },
  'logo_full.webp': { width: 200, height: 200 },
  'logo_phoviet.webp': { width: 200, height: 200 },
  'logo-share.webp': { width: 1200, height: 630 },
  'logo_cungdinhhue.webp': { width: 400, height: 400 },
};

function getResizeConfig(relativePath) {
  const basename = path.basename(relativePath);
  if (resizeRules[basename]) return resizeRules[basename];
  if (basename.startsWith('menu_')) return { width: 256, height: 256 };
  if (relativePath.includes('reviews/') || relativePath.includes('reviews\\')) return { width: 200, height: 200 };
  return null;
}

async function processFile(filePath, relativePath) {
  const config = getResizeConfig(relativePath);
  if (!config) return;

  try {
    const inputBuffer = fs.readFileSync(filePath);
    const metadata = await sharp(inputBuffer).metadata();
    
    if (metadata.width <= config.width && metadata.height <= config.height) {
      console.log(`[Skip] ${relativePath} already ${metadata.width}x${metadata.height}`);
      return;
    }

    const oldSize = inputBuffer.length;
    const quality = config.width <= 200 ? 85 : 80;
    
    const outputBuffer = await sharp(inputBuffer)
      .resize(config.width, config.height, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ quality, effort: 6 })
      .toBuffer();
    
    fs.writeFileSync(filePath, outputBuffer);
    
    const savedPercent = (((oldSize - outputBuffer.length) / oldSize) * 100).toFixed(1);
    console.log(`[Resized] ${relativePath}: ${metadata.width}x${metadata.height} → ≤${config.width}x${config.height} | ${(oldSize/1024).toFixed(1)} KB → ${(outputBuffer.length/1024).toFixed(1)} KB (−${savedPercent}%)`);
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

console.log('Resizing images to match actual display dimensions...\n');
await walkDir(publicDir, publicDir);
console.log('\nDone!');
