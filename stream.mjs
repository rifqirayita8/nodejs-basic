import fs, { write } from 'fs';

const writer= fs.createWriteStream('target.log');
writer.write('Hello, ');
writer.write('Nama saya ');
writer.write('Rifqi');
writer.close();

const reader= fs.createReadStream('target.log');
reader.on('data', function(data) {
    console.info(data.toString());
    reader.close();
})
