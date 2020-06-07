console.log(111);

import {ziyue as foobar} from './ziyue.mjs';

const argv = process.argv;
console.log(foobar(argv[2] || '巧言令色，鮮矣仁！'));