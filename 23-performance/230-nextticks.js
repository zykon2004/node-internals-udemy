//next tick happens after initial phase 
console.log("initial phase start...") 
for ( i =0; i< 1000000000; i++);
process.nextTick( ()=>console.log("next tick1"))
process.nextTick( ()=>console.log("next tick2"))
process.nextTick( ()=>console.log("next tick3"))
for ( i =0; i< 1000000000; i++);
console.log("end initial...") 
 