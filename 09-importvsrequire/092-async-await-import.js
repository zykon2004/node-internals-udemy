console.log("Start Initial phase")
const fs = require('fs');
import ("./a.js")
async function loadModule() {
    console.log("before importing module B")
    await import ("./b.mjs")
    console.log("after importing module B") //this will be executed last
}
console.log("Before calling B")
loadModule();
console.log("After calling B")

setTimeout( ()=>console.log("timer"),0)

fs.readFile(__filename, () => {
  console.log("read file done")
  setImmediate(() => console.log('immediate'));
});
console.log("End initial phase ")

