import readline from 'readline';

const input= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question('Siapa namamu?: ', function(nama) {
    console.info(`Hello ${nama}!`);
    input.close();
} )