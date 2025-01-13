const net = require('net');
 
// Create a client
const client = new net.Socket();

// Connect to the server that exists (this is example.com)

//connect, listen, read and write, 10 seconds apart each

setTimeout(listen, 0);
setTimeout(connect,5000 );
setTimeout(read, 10000);
setTimeout(write, 20000);
setTimeout(close, 30000);

function connect(){
	//a socket connection is created (client) 
    client.connect(8080, '127.0.0.1', () => {
        console.log(`Connected to server at ${'127.0.0.1'}:${8080}`);
    });
    client.on("data", (data) => console.log( "got some data" + data.toString()));
}

function listen(){
	//a listening socket is created 
    const server = net.createServer(() => {}).listen(8080);
    server.on("listening", ()=> console.log("server created.")) 
	//when a connection is accepted a new connection is created (the server side connection)
 
}
function close(){
    console.log("close event...")
    client.destroy();
}
function read(){
    console.log("read event initiated")
    client.on("data", (data) => console.log( "got some data" + data.toString()));
}

function write(){
    console.log("write event initiated")
    client.write("something..");

} 
