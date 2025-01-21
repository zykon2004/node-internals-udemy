const net = require("net")
console.log("Before server")
server = net.createServer(() => {})
console.log("Before Bind")
//this requires DNS which requires the event loop
server.listen(8080, "127.0.0.1");
server.on("listening", ()=> console.log("server created on loopback v4."))
server.on("connection", (connection) => {
    console.log(`new connection! ${connection.remotePort}` )
    //wire the data event 
    connection.on("data", (data) => console.log(`got new data` + data.toString() )) 
    })
//if you try to connect before the initial phase completes you will fail 
console.log("After initial phase")
