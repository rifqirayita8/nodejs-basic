import process from 'process';

process.addListener('exit', function(exitCode) {
    console.info('Proses exit dengan kode: ', exitCode);
})

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.info('Baris kode ini tidak akan dieksekusi.');