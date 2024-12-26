//example where the initial phase is long and there is a readfile 
const fs = require(`fs`);

console.log(`START`);

const readFileCallback = (err, data) => {
  console.log(`readFileCallback ${data}`);
};
const f = '/Users/HusseinNasser/projects/node-course-content/03-poll/test.txt'
//in the intial phase this file will only be opened (not read)
//if it fails we immediately know, we add a callback in the poll queue with failure.
fs.readFile(f, readFileCallback);

//slow down the initial phase
for (let i = 1; i <= 100000000000; i++);
//after the loop ends and initial phase is done, we enter the poll phase and actually read the file (no callbacks ready)
console.log(`END`);