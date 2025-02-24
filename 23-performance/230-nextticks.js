//next tick happens after initial phase,
//a nice way to know when does next tick starts is when the initial phase done

console.time("IP")
process.nextTick( () => console.timeEnd("IP"));
process.nextTick( ()=>console.log("TRUE END OF INITIAL PHASE--First next tick! "))

console.time('require Time');
require('fetch');  
console.timeEnd('require Time');

console.time('Import Time');
import('fetch');  
console.timeEnd('Import Time');

console.log("initial phase start...") 
for ( i =0; i< 1000000000; i++);
process.nextTick( ()=>console.log("next tick1"))
process.nextTick( ()=>console.log("next tick2"))
process.nextTick( ()=>console.log("next tick3"))
for ( i =0; i< 1000000000; i++);
console.log("end initial...") 
 