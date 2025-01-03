const net = require('net');

console.log("start")
//when listening on a socket, accept is being called 
//to accept new connections, this happens while the socket
//is alive
const server = net.createServer(() => {}).listen(8080);
setTimeout( ()=> server.close(), 4000); 

server.on('listening', () => console.log("listening.."));

console.log("end");
