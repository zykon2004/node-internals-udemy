//example where the initial phase is long and there is a readfile 

const fs = require(`fs`);

console.log(`START`);

const readFileCallback = (err, data) => {
  console.log(`readFileCallback ${data}`);
};
const f = 'test.txt'
//in the initial phase this file will only be opened (not read)
//if it fails we immediately know, we add a callback in the poll queue with failure.
fs.readFile(f, readFileCallback);
// scheduled in the check phase before the readfile IO is completed.
setImmediate( ()=> console.log("setImmediate called"));

//after the loop ends and initial phase is done, we enter the poll phase and actually read the file (no callbacks ready)
console.log(`END`);
