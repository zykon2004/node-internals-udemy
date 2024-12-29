console.log("Start Initial phase")

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
  console.log("read file done")
  console.log("Before requiring module A")
  require ("/Users/HusseinNasser/courses/node-course-content/09-importvsrequire/099-moduleA.js")
  console.log("After requiring module A")


});


console.log("End initial phase ")