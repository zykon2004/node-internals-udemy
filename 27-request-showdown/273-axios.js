const axios = require("axios");
const http = require("node:http");

const myAgent = new http.Agent({
    keepAlive: true, // Keep connections alive by sending keep-alive messages
    maxSockets: 10, // Set max connections
});

const requestCount = 100;
const stats = {"request": { "time": 0, "mem": 0}, "response": { "time": 0, "mem": 0}}
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
 
console.log("submitted all requests");
console.timeEnd ("http.request")
let endRSSAllRequests = process.memoryUsage().rss;
let endRequest = Date.now() 
stats.request.mem = (endRSSAllRequests - startRSS).toLocaleString()
stats.request.time = endRequest - startRequest 
console.log (`Memory used after sending all requests ${stats.request.mem} bytes`)
let endRSSAllResponses;
let endResponse;

Promise.all(requests).then ( a=> {
    console.timeEnd( "http.response")
    endRSSAllResponses= process.memoryUsage().rss;
    endResponse = Date.now();
    stats.response.mem = (endRSSAllResponses - startRSS).toLocaleString()
    stats.response.time = endResponse - startRequest;
    console.log (`Memory used after receiving all responses ${(endRSSAllResponses - startRSS).toLocaleString()} bytes`)
    console.table(stats)
})
//take a peek at pending

// Function to send requests using Axios
function sendRequest(url, options) {
    return axios({
        url,
        method: options.method,
        httpAgent: options.httpAgent, // Attach the custom HTTP agent
    })
}
