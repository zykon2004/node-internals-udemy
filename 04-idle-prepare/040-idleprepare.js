//we run this code with this command

//strace -e trace=epoll_ctl -f -o test.txt node 04-idle-prepare/040-idleprepare.js
//this will run an strace (linux) and will listen to epoll_ctl system calls
//these are specifcally called to setup new file desctriptors to prepare 
//for the poll phase 

const net = require('net');

// Create a server object
const server = net.createServer((socket) => {
    console.log('Client connected');

    // Handle incoming data from the client
    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        socket.write('Echo: ' + data); // Echo back the data
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected');
    });

    // Handle errors
    socket.on('error', (err) => {
        console.error('Socket error:', err);
    });
});

// Server listens on port 3000
server.listen(3000 ,'0.0.0.0',  () => {
    console.log('Server listening on port 3000');
});

// Handle server errors
server.on('error', (err) => {
    console.error('Server error:', err);
});

setTimeout( ()=> server.close(), 30000); 

function test(){
console.log(Date.now() + "test");
	setTimeout(test, 4000);
}

//test();
console.log("start")
//for (let i = 0; i < 10000000000; i++);
console.log("end")
