const net = require('net');
 
// Create a client
const client = new net.Socket();

// Connect to the server that exists (this is example.com)

//connect, read and write, 10 seconds apart each

setTimeout(connect, 0);
setTimeout(read, 10000);
setTimeout(write, 20000);
setTimeout(close, 30000);

function connect(){
    client.connect(80, '93.184.215.14', () => {
        console.log(`Connected to server at ${'93.184.215.14'}:${80}`);
    });
    client.on("data", (data) => console.log( "got some data" + data.toString()));
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
