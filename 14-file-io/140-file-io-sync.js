const fs = require("fs");
//done in the initial phase blocks main thread
console.log(fs.readFileSync(__filename, 'utf-8'));
console.log("before loop")
for (let i = 0; i < 1000000; i++);
console.log("after loop");

