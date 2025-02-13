const dgram = require('dgram')
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`); 
  //we can send something back.
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(3333);
// Prints: server listening 0.0.0.0:3333