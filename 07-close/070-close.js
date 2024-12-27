//example where pending callbacks are scheduled in a different phase. 
const net = require('net');
console.log(`START`);
// Create a client
const clientSuccess = new net.Socket();
// Connect to the server that exists (this is example.com)
clientSuccess.connect(80, '93.184.215.14', () => {
    console.log(`Connected to server at ${'93.184.215.14'}:${80}`);
});
//destroy the connection after 5 seconds
setTimeout( ()=> clientSuccess.destroy(), 5000); 
// Handle close events
clientSuccess.on('close', () => {
    console.error(`Connection closed.`);
});

//slow down the initial phase
for (let i = 1; i <= 500000000; i++);
//after the loop ends and initial phase is done, we enter the poll phase and actually read the file (no callbacks ready)
console.log(`END`);

