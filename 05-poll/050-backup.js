const fs = require(`fs`);

console.log(`START`);

const readFileCallback = (err, data) => {
  console.log(`readFileCallback ${data}`);
};
fs.readFile('/Users/HusseinNasser/projects/node-course-content/03-poll/test.txt', readFileCallback);

const setImmediateCallback = () => {
  console.log(`setImmediateCallback`);
};
setImmediate(setImmediateCallback);

// Now follows the loop long enough to give the fs.readFile enough time
// to finish its job and to place its callback (the readFileCallback)
// into the event-loop's poll phase queue before the "main" synchronous part
// of the this code finishes.
for (let i = 1; i <= 100000000000; i++) {}

console.log(`END`);
// So when the event-loop starts its first tick there should be two callbacks
// waiting:
//   (1) the readFileCallback (in the poll queue)
//   (2) the setImmediateCallback (in the check queue)
// Now according to the Node.js DOCs, of these two waiting callbacks
// the readFileCallback should execute first, but the opposite
// is actually happening, that is setImmediateCallback executes first.