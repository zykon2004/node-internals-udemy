    const net = require("net")
	//a listening socket is created 
    //instant bind a listen (no DNS required, no poll ie)
    //happens in the initial phase, no DNS required.
    //we bind on all addresses
    console.log("Before server")
    server = net.createServer(() => {})
    console.log("Before Bind")
    server.listen(8080);
    server.on("listening", ()=> console.log("server created."))
    server.on("connection", (connection) => console.log(`new connection! ${connection.remotePort}` ))
    //if you try to connect before the initial phase completes you will be able to 
    for (let i =0 ;i < 10000000000; i++);

    console.log("After initial phase")
