const http = require("node:http");

const server = http.createServer();

server.on("request", (req, res) => {
    //req is a readable stream on the server
    //body is not read by default (can be large)
    req.on("data", data => {
        //only executed when there is a body in the request 
        //like POST, headers are implicitly read and prepared for us
        //by the http lib
        console.log("reading request" + data.toString())
    })
    //res is a writable stream on the server 
    res.statusCode= 200;
    res.setHeader("content-type", "text/plain")
    res.write("hello world" + req.url) 
    res.end();
})

//send this request
//curl http://localhost:8080 -X POST -d "key1=value1"
 server.listen(8080, ()=> console.log("Actualy listening.."));
 