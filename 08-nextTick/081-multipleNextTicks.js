console.log("start");
for (let i =0; i< 100000000; i++);
console.log ("end");
setTimeout(()=> {
    console.log("timer")
    process.nextTick( ()=>console.log("nextTick after timer")) 
 
}
, 0);
process.nextTick( ()=>console.log("nextTick after initial phase")) 


// timeout_vs_immediate.js
//here nothing runs in the inital phase
//both callbacks will be scheduled only after the read is successful (or failed)
//ie in the poll phase.. we schedule the timer 
//and then the check immediate
//following the loop the output is always deterministic 

const fs = require('fs');

fs.readFile(__filename, () => {
    console.log("read file.")
  setImmediate(() => {
    console.log('immediate');
    process.nextTick( ()=>console.log("nextTick after check phase")) 

  });
  process.nextTick( ()=>console.log("nextTick after poll phase")) 

});
