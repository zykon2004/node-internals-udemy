console.log("Start Initial phase")
 function loadModule() {
    console.log("before importing module B")
     import ("./097-moduleB.mjs")
    //console.log("the value " +   thetest.default.test)
    console.log("after importing module B")
}

console.log("Before calling B")
loadModule();
console.log("After calling B")

console.log("End initial phase ")


const fs = require('fs');

fs.readFile(__filename, () => {
  console.log("read file done")
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

setTimeout( ()=>console.log("timer"),0)

//example where pending callbacks are scheduled in a different phase. 
const net = require('net');
console.log(`START`);
// Create a client
const clientSuccess = new net.Socket();
// Connect to the server that exists (this is example.com)
clientSuccess.connect(80, '93.184.215.14', () => {
    console.log(`Connected to server at ${'93.184.215.14'}:${80}`);
    clientSuccess.destroy();
});
//destroy the connection after 5 seconds
setTimeout( ()=> clientSuccess.destroy(), 5000); 
// Handle close events
clientSuccess.on('close', () => {
    console.error(`Connection closed.`);
});

