//example where the initial phase is long and there is a readfile 
const fs = require(`fs`);

console.log(`START`);

const readFileCallback = (err, data) => {
  console.log(`readFileCallback ${data}`);
};

const f = '/it-just-doesntexist.txt'
//in the intial phase this file will only be opened (not read)
//we discover the file is not there , the initial phases adds a new callback
//to the poll queue with a rejected promise (err)
fs.readFile(f, readFileCallback);
fs.readFile('test.txt', readFileCallback);

//slow down the initial phase
for (let i = 1; i <= 1000000000; i++);
//after the loop ends and initial phase is done, we enter the poll phase and see that there is one callback ready for us to process, nothing to read
console.log(`END`);