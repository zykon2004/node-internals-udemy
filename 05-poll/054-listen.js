const net = require('net');

console.log("start")
//when passing only the port, the listener socket
//is created immediately in the initial phase
//the listening event however is fired in the main loop
//this means the console won't print "listening" but you will
//still be able to connect 

// the moment you add a host parameter, node need to resolve it 
//which takes time so this happens during hte event loop (poll phase)
const server = net.createServer(() => {}).listen(8080);
for (let i =0; i < 10000000; i++);

server.on('listening', () => console.log("listening.."));

console.log("end");
