const http = require("node:http");
const myAgent = http.Agent({
     "keepAlive": true, //keep connections alive by sending keep alive messages
     "maxSockets": 1 //lets use one socket per host for testing
     //change max sockets and see how much faster it gets
});

//sending multiple requests
const start = Date.now()//measure current time

//we can parse the URL once
const url = new URL("http://example.com")

for (let i =0; i < 100; i++) {
     //pass the parsed url
     //if you pass the string , we parse it everytime
     const req = http.request(url, {"agent": myAgent, "method": "GET"},
          (res => {
                 //set the encoding
                 res.setEncoding('utf-8')
                 res.on("data", data => console.log("got response " + i))             
          }));
      
     req.end();// must call it to actually send the request 
}

console.log("submitted all requests");
//take a peek at pending
//requests console.log(myAgent.requests)
