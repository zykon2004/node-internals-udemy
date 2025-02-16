console.log("Start Initial phase")

import ("./a.js")
function loadModule() {
    console.log("before importing module B")
    const x = import ("./b.mjs")
    console.log(x)
    console.log("after importing module B")
}
 

console.log("Before calling B")
loadModule();
console.log("After calling B")

setTimeout( ()=>console.log("timer"),0)

const fs = import ('fs');

fs.then (fs => {
  fs.readFile("a.mjs", () => {
    console.log("read file done")
    setImmediate(() => console.log('immediate'));
  });
})

console.log("End initial phase ")

