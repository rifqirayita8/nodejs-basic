const encode= Buffer.from('Hello Dunia!', 'utf8');

console.info(encode.toString('base64'));
console.info(encode.toString('hex'));

const encode2= Buffer.from('SGVsbG8gRHVuaWEh', 'base64');
console.info(encode2.toString('utf8'));