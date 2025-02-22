const dgram = require('dgram')
const server = dgram.createSocket('udp4');
 
server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`); 
  //we can send something back to the destination
  //we write a udp datagram and set the destination ip/ port 
  //notice it is called send and not write, because it is a whole message
  server.send("hello client!", rinfo.port,  rinfo.address);
  
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});


server.bind(3333); 
//use this to send a sample udp message
echo "Hello UDP" | nc -u 127.0.0.1 3333

// Prints: server listening 0.0.0.0:3333