const fs = require("fs");
//done in the initial phase blocks main thread
console.log("Start initial phase")
console.log("--About to read file sync")
console.log("--Result of sync read " + fs.readFileSync(__filename, 'utf-8').length);
console.log("--Finished reading file sync")
console.log("--About to read file async")
fs.readFile(__filename, 'utf-8', (err,data)=> 
    console.log("--result of async read " + data.length));
console.log("--Finished reading file async")
//schedule to timer phase
setTimeout( ()=> {
    console.log("----From timer About to read file sync")
    console.log("----Result of sync read " + fs.readFileSync(__filename, 'utf-8').length);
    console.log("----From timer Finished reading file sync")
    console.log("----From timer About to read file async")
    fs.readFile(__filename, 'utf-8', (err,data)=> 
        console.log("----From timer result of async read " + data.length));
    console.log("----From timer Finished reading file async")
} , 1);
for (let i = 0; i < 1000000; i++);
console.log("End initial phase")