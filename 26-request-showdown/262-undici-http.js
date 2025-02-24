const undici = require('undici');

const myAgent = new undici.Agent({
     "connections": 10 // set max connections
});


const requestCount = 100;
const stats = {"undici":  {"reqtime": 0, "reqmem": 0, "restime": 0, "resmem": 0}}
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
    requests.push(sendRequest(url, {"dispatcher": myAgent, "method": "GET"} ))
}
 
console.log("prepared all requests");
console.timeEnd ("http.request")
let endRSSAllRequests = process.memoryUsage().rss;
let endRequest = Date.now() 
stats[Object.keys(stats)[0]].reqmem = (endRSSAllRequests - startRSS).toLocaleString()
stats[Object.keys(stats)[0]].reqtime = endRequest - startRequest 
console.log (`Memory used after preparing all requests ${endRequest - startRequest} bytes`)
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
//take a peek at pending
 
function sendRequest(url, opt) {
   return undici.request(url, opt);
}