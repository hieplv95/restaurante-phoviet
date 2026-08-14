import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace menu, hero, about, reviews and logo images from .png to .webp (excluding flag icons)
  content = content.replace(/(?<!\/flags\/[a-z]{2})\.(png)(?=['"`])/g, '.webp');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated image extensions in: ${filePath}`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js') || entry.name.endsWith('.css') || entry.name.endsWith('.html'))) {
      replaceInFile(fullPath);
    }
  }
}

walkDir(srcDir);
replaceInFile(path.resolve('index.html'));
console.log('All image paths updated successfully!');
