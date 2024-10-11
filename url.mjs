import {URL} from 'url';

const rrd= new URL('https://nodejs.org/dist/latest-v16.x/docs/api/globals.html');

console.info(rrd.toString());
console.info(rrd.protocol);
console.info(rrd.host);
console.info(rrd.pathname);
console.info(rrd.searchParams);

//edit URL
rrd.host= 'www.google.com';
const searchParam = rrd.searchParams;
searchParam.append('status', 'premium');

console.info(rrd.toString());