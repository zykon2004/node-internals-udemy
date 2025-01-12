const net = require('net');
 
// Create a client
const client = new net.Socket();

// Connect to the server that exists (this is example.com)

//connect, listen, read and write, 10 seconds apart each

setTimeout(connect, 10000);
//setTimeout(listen, 20000);
setTimeout(read, 30000);
//setTimeout(write, 40000);

function connect(){
    client.connect(80, '93.184.215.14', () => {
        console.log(`Connected to server at ${'93.184.215.14'}:${80}`);
    });
}

function listen(){
    const server = net.createServer(() => {}).listen(8080);
    server.on("listening", ()=> console.log("server created."))
 
}

function read(){
    console.log("read event initiated")
    client.on("data", (data) => console.log( "got some data" + data.toString()));
}

function write(){
    console.log("write event initiated")
    client.write("something..");

} 