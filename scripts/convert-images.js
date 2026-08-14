import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.png')) {
      const ext = path.extname(entry.name);
      const baseName = path.basename(entry.name, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);

      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        // Convert to webp with optimal compression
        await image
          .webp({ quality: 82, effort: 6 })
          .toFile(webpPath);

        const oldSize = fs.statSync(fullPath).size;
        const newSize = fs.statSync(webpPath).size;
        const savedPercent = (((oldSize - newSize) / oldSize) * 100).toFixed(1);

        console.log(`[Converted] ${entry.name} (${(oldSize / 1024).toFixed(1)} KB) -> ${baseName}.webp (${(newSize / 1024).toFixed(1)} KB) - Saved ${savedPercent}%`);
      } catch (err) {
        console.error(`Error processing ${entry.name}:`, err);
      }
    }
  }
}

async function run() {
  console.log('Starting image conversion in:', publicDir);
  await processDirectory(publicDir);
  console.log('Image conversion completed!');
}

run();
