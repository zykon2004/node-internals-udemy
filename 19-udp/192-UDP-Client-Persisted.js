const dgram = require('dgram')
const client = dgram.createSocket('udp4');

client.on('message', (msg, rinfo) => {
  console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

//optional but we can bind to a random port of our choice
client.bind(55555);

client.connect( 3333,"127.0.0.1", () => {
  console.log ("server exists .. send something.. ")
  //notice that its called send and not write 
  //because it is not a stream of bytes ..but an actual unit (message) we send 
  client.send("a whole message");
});

client.on("error", (err) => console.log(err) )
client.on('listening', () => {
  const address = client.address();
  //this will keep reading
  console.log(`client listening ${address.address}:${address.port}`);
});
 