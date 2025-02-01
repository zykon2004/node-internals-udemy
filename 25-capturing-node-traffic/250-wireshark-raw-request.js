const http = require("node:http");
const req = http.request("http://example.com",  { "method": "GET"});

req.on("response", res => {
            console.log(res.headers)
            console.log(res.statusCode);
            //set the encoding
            res.setEncoding('utf-8')
            res.on("data", data => console.log("some data" + data))             
     })

req.end();// must call it to actually send the request (end the steream //we will discuss this more on the stream lecture)
let x = req.getHeaders();
console.log(x)

