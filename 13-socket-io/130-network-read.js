const net = require('net');
const client = new net.Socket(); // Create a client socket
//connect to a server that exists (this is example.com)
//connect, write and close, 10 seconds apart each
setTimeout(connect, 0);
setTimeout(write, 10000);
setTimeout(close, 20000);

function connect(){
    //once a connection is created, epoll will be waited on IO (reads and writes)
    client.connect(80, '93.184.215.14', () => console.log(`Connected to server at ${'93.184.215.14'}:${80}`));
    client.on("data", (data) => console.log( "got some data: " + data.toString()));
}
function write(){
    //before this happens we need to check 
    //if the socket is ready to be written to
    console.log("write initiated") 
    client.write("something...");
} 
function close(){
    console.log("close event...")
    client.destroy();
}