const names = require('./name');
console.log(names);

const sayHi = require('./utils');
const data = require('./alternative-flavor');

console.log(data);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);