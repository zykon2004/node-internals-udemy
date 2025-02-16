//.js supports both require and import
//.mjs only supports import

console.log("Start Initial phase")
//tip, require relative path works based on where the current execution is 
console.log("file is  " + __filename)
require ("./a.js")
const f = 100;
if (f == 110)
{
    //this won't execute unless
    //condition is met 
   console.log("Before requiring module  B")
   require ("./b.js")
   console.log("After requiring module B")
}

const fs = require('fs');

fs.readFile(__filename, () => {
  console.log("Before requiring module D")
  require ("./d.mjs")
  console.log("After requiring module D")

});

console.log("End initial phase ")