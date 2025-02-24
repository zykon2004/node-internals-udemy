const http = require("node:http");
const myAgent = http.Agent({
     "keepAlive": true, //keep connections alive by sending keep alive messages
     "maxSockets": 10 // set max connections
});

const requestCount = 100;
const stats = {"http":  {"reqtime": 0, "reqmem": 0, "restime": 0, "resmem": 0}}
const startRequest = Date.now()
//sending multiple requests
console.time("http.request")
console.time( "http.response")
 
const startRSS = process.memoryUsage().rss;

//we can parse the URL once
const url = new URL("http://example.org")
const requests = []
for (let i =0; i < requestCount; i++) {
     //pass the parsed url
     //if you pass the string , we parse it everytime
    requests.push(sendRequest(url, {"agent": myAgent, "method": "GET"} ))
}
 
console.log("prepared all requests");
console.timeEnd ("http.request")
let endRSSAllRequests = process.memoryUsage().rss;
let endRequest = Date.now() 
stats[Object.keys(stats)[0]].reqmem = (endRSSAllRequests - startRSS).toLocaleString()
stats[Object.keys(stats)[0]].reqtime = endRequest - startRequest 
console.log (`Memory used after preparing all requests ${(endRSSAllRequests - startRSS).toLocaleString()} bytes`)
let endRSSAllResponses;
let endResponse;
Promise.all(requests).then ( a=> {
    console.timeEnd( "http.response")
    endRSSAllResponses= process.memoryUsage().rss;
    endResponse = Date.now();
    stats[Object.keys(stats)[0]].resmem = (endRSSAllResponses - startRSS).toLocaleString()
    stats[Object.keys(stats)[0]].restime = endResponse - startRequest;
    console.log (`Memory used after receiving all responses ${(endRSSAllResponses - startRSS).toLocaleString()} bytes`)
    console.table(stats)
})
//take a peek at pending

function sendRequest(url, opt) {
    return new Promise( (resolve, reject) => {
        const req = http.request(url, opt,
            (res => {
                   res.setEncoding('utf-8')
                    //set the encoding
                   
                   res.on("data", data => resolve(data))      
                   //res.on("error", err=> reject(err))       
            }));
        
       req.end();// must call it to actually send the request 
    })
}