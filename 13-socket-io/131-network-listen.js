const net = require('net');
const client = new net.Socket(); // Create a client
let server;
//connect to the server that exists (this is example.com)
//connect, listen,  write, close 10 seconds apart each
setTimeout(listen, 0);
setTimeout(connect,10000 );
setTimeout(write, 20000);
setTimeout(close, 30000);

function listen(){
	//a listening socket is created 
    server = net.createServer(() => {}).listen(8080);
    server.on("listening", ()=> console.log("server created."))
    server.on("connection", (connection) => console.log(`new connection! ${connection.remotePort}` ))
	//when a connection is accepted a new connection is created (the server side connection)
}
function connect(){
	//a socket connection is created (client) 
    client.connect(8080, '127.0.0.1', () => console.log(`Connected to server at ${'127.0.0.1'}:${8080}`));
    client.on("data", (data) => console.log( "got some data" + data.toString()));
}
function close(){
    console.log("close initiated...")
    client.destroy();
    //destroy server, otherwise, will keep polling for connections
    server.close();
}
function write(){
    console.log("write initiated")
    client.write("something..");

} 
