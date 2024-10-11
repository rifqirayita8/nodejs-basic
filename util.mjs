import util from 'util';

console.info(util.format('Hello %s', 'Rifqi'));

const person= {firstName: 'Rifqi', lastName: 'Rayita'};
console.info(util.format('Person: %j', person));