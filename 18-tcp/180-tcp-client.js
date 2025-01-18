const net = require("net")
//create a tcp connection to example.com (this does DNS)
//we can do wireshark/tcp dump to see the network 
const connection = net.createConnection({"host": "example.com", "port": 80})
connection.on("connect", () => {
    console.log("connected! 3 way handshake done we got a full fledged connection")
    console.log(connection.localAddress + " + " + connection.localPort);

    //we can send something to the socket
    //the new lines to signify the end of the request
    connection.write("GET / HTTP/1.1\nHost:www.example.com\n\n");
  })

 connection.on("data", (data) => console.log (data.toString()))
