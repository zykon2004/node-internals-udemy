const http = require("node:http");

const server = http.createServer();

server.on("request", (req, res) => {
    res.statusCode= 200;
    res.setHeader("content-type", "text/plain")
    res.write("hello world" + req.url) 
    res.end();
})

console.log("Before listening")
server.listen(8080, ()=> console.log("Actualy listening.."));
console.log("After listening")
