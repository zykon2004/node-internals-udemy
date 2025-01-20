const http = require("node:http");
//override the highwater mark 
//default is 64K
const server = http.createServer({"highWaterMark": 1024} );
server.on("request", (req, res) => {
    //default is 65536
    //https://github.com/nodejs/node/blob/55c42bc6e5602e5a47fb774009cfe9289cb88e71/lib/_stream_readable.js#L45
    console.log("highWaterMark" + req.readableHighWaterMark)
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
//send this request curl http://localhost:8080 -X POST -d "key1=value1"
 server.listen(8080, ()=> console.log("Actualy listening.."));
 