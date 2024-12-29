console.log("Start Initial phase")
//tip, require relative path works based on where the current execution is 
console.log("file is  " + __filename)
require ("./098-moduleC.js")
const f = 100;
if (f == 110)
{
    //this won't execute unless
    //condition is met 
   console.log("Before requiring module A")
   require ("./099-moduleA.js")
   console.log("After requiring module A")
}

const fs = require('fs');

fs.readFile(__filename, () => {
  console.log("Before requiring module D")
  require ("./096-moduleD.js")
  console.log("After requiring module D")

});

console.log("End initial phase ")