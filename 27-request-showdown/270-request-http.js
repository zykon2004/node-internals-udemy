const http = require("node:http");
const myAgent = http.Agent({
     "keepAlive": true, //keep connections alive by sending keep alive messages
     "maxSockets": 10 // set max connections
});

//sending multiple requests
console.time("http.request")
console.time( "http.response")
const startRSS = process.memoryUsage().rss;

//we can parse the URL once
const url = new URL("http://example.org")
const requests = []
for (let i =0; i < 100; i++) {
     //pass the parsed url
     //if you pass the string , we parse it everytime
    requests.push(sendRequest(url, {"agent": myAgent, "method": "GET"} ))
}
 
console.log("submitted all requests");
console.timeEnd ("http.request") 
let endRSSAllRequests = process.memoryUsage().rss;
console.log (`Memory used after sending all requests ${(endRSSAllRequests - startRSS).toLocaleString()} bytes`)
let endRSSAllResponses;

Promise.all(requests).then ( a=> {
    console.timeEnd( "http.response")
    endRSSAllResponses= process.memoryUsage().rss;
    console.log (`Memory used after receiving all responses ${(endRSSAllResponses - startRSS).toLocaleString()} bytes`)
})
//take a peek at pending

function sendRequest(url, opt) {
    return new Promise( (resolve, reject) => {
        const req = http.request(url, opt,
            (res => {
                   //set the encoding
                   res.setEncoding('utf-8')
                   res.on("data", data => resolve(data))      
                   res.on("error", err=> reject(err))       
            }));
        
       req.end();// must call it to actually send the request 
    })
}