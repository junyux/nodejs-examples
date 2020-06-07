// (async function() {
//   try {
//     const e = await import('./test.mjs');
//     console.log(e);
//   } catch(ex) {
//     console.log(ex);
//   }
// }());
import * as a from './test.js';
console.log(a);