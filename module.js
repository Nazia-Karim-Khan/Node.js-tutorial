const names = require('./name');
console.log(names);

const sayHi = require('./utils');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);