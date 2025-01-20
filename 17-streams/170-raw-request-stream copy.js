const http = require("node:http");
//request object is a writable stream
const req = http.request("http://example.com",  { "method": "GET"});

req.on("response", res => {
        //the data events implicity calls read for us
        //response object is a readeable stream
        res.on("data", data => console.log("some data" + data))  
     })

req.end();//no more data, we are done. wrap up
//this doesn't mean "send" , some data might have already been sent