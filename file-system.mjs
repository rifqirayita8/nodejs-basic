import fs from 'fs';

const buffer= fs.readFileSync('file-system.mjs');

console.info(buffer.toString());

fs.writeFileSync('tes.txt', 'Hello Dunia!');