const dgram = require('dgram');
const { isTypedArray } = require('util/types');
const client = dgram.createSocket('udp4');

client.on('message', (msg, rinfo) => {
  console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
//this automatically binds to a random port, (can't send anything otherwise)
client.send("hello server", 3333, "127.0.0.1")

//optionally bind to a source port of your choosing
//if you don't do that, kernel will pick one for you
//client.bind(55555) 

//technically if you know the clients bind source port anyone can send stuff to it ! 
//try it
////echo "Hello UDP" | nc -u 127.0.0.1 randomport
client.on("error", (err) => console.log(err) )
//a bind was successful! 
client.on('listening', () => {
  const address = client.address();
  //this will keep reading
  console.log(`client listening ${address.address}:${address.port}`);
});
 