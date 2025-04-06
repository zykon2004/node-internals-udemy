setTimeout(() => {
  console.log("timeout, inside timer phase");
}, 0);

process.nextTick(() => {
  console.log("scheduled nextTick #1");
});

// does not have to be an async function to be awaited
function readFilePromise(file) {
  console.log("before creating new promise");
  return new Promise((resolve, reject) => {
    console.log("inside creating new promise");
    // __filename is not imported with `fs` but is always available in Node.js
    const fs = require("fs");
    console.log("after loading fs");
    // it's all synchronous up until this line. after this line nextTick will be called
    process.nextTick(() => {
      console.log("scheduled nextTick #2");
    });
    fs.readFile(file, (err, data) => {
      //when we get this call resolve
      console.log("after reading file, inside poll phase");
      if (err) reject(err);
      else resolve(data.toString());
    });
  });
}

async function read() {
  console.log("inside read");
  return await readFilePromise(__filename);
}

console.log(read());
