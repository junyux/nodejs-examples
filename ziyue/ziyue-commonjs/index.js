const path = './ziyue.js';

if(true) {
const ziyue = require(path);

const argv = process.argv;
console.log(ziyue(argv[2] || '巧言令色，鮮矣仁！'));
}