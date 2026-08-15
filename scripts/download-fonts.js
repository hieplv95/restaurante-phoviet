import https from 'https';
import fs from 'fs';
import path from 'path';

const fontsDir = path.resolve('public/fonts');

const fonts = [
  // Playfair Display - latin
  { url: 'https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTzYgA.woff2', name: 'PlayfairDisplay-latin.woff2' },
  // Playfair Display - latin-ext  
  { url: 'https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTLYgFE_.woff2', name: 'PlayfairDisplay-latin-ext.woff2' },
  // Playfair Display - vietnamese
  { url: 'https://fonts.gstatic.com/s/playfairdisplay/v40/nuFiD-vYSZviVYUb_rj3ij__anPXDTPYgFE_.woff2', name: 'PlayfairDisplay-vietnamese.woff2' },
  // Plus Jakarta Sans - latin
  { url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', name: 'PlusJakartaSans-latin.woff2' },
  // Plus Jakarta Sans - latin-ext
  { url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko40yyygA.woff2', name: 'PlusJakartaSans-latin-ext.woff2' },
  // Plus Jakarta Sans - vietnamese
  { url: 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko50yyygA.woff2', name: 'PlusJakartaSans-vietnamese.woff2' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        const size = fs.statSync(dest).size;
        console.log(`Downloaded: ${path.basename(dest)} (${(size/1024).toFixed(1)} KB)`);
        resolve();
      });
    }).on('error', reject);
  });
}

for (const f of fonts) {
  await download(f.url, path.join(fontsDir, f.name));
}
console.log('\nAll fonts downloaded!');
