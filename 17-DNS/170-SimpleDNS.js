const http = require("node:http");
//this does a DNS 
const req = http.request("http://example.com",  { "method": "GET"});
req.end(); 
let x = req.getHeaders();
console.log(x)

