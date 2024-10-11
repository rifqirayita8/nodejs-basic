import dns from 'dns/promises';

const lookup= await dns.lookup('www.google.com');

console.info(lookup.address);
console.info(lookup.family);