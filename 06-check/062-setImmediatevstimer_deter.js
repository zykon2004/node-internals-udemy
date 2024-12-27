// timeout_vs_immediate.js
//here nothing runs in the inital phase
//both callbacks will be scheduled only after the read is successful (or failed)
//ie in the poll phase.. we schedule the timer 
//and then the check immediate
//following the loop the output is always deterministic 

const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});