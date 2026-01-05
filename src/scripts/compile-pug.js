import pug from 'pug';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Компілюємо index.pug → index.html
const indexPugPath = path.join(__dirname, '../src/index.pug');
const indexHtmlPath = path.join(__dirname, '../src/index.html');

const html = pug.renderFile(indexPugPath, {
  pretty: true,
  basedir: path.join(__dirname, '../src'),
});

fs.writeFileSync(indexHtmlPath, html);
console.log('✓ Compiled index.pug → index.html');
