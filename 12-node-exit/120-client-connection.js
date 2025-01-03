//example where pending callbacks are scheduled in a different phase. 
const net = require('net');
console.log(`START`);
// Create a client
const clientSuccess = new net.Socket();
// Connect to the server that exists (this is example.com)
//once we connect, Node C++ code will call "read/rcv" system call
//to read data from the connections
//if the connection is closed Node exists
clientSuccess.connect(80, '93.184.215.14', () => {
    console.log(`Connected to server at ${'93.184.215.14'}:${80}`);
});
//destroy the connection after 10 seconds, 
setTimeout( ()=> clientSuccess.destroy(), 10000); 
// Handle close events
clientSuccess.on('close', () => {
    console.error(`Connection closed.`);
});
 
console.log(`END`);

