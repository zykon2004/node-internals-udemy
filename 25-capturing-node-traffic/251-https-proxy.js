const http = require("node:https");
const fs = require("fs")
const HttpsProxyAgent = require('https-proxy-agent')
//process.env['HTTPS_PROXY'] is the default env variable
//spin mitmproxy -p 8888
//node will reject MITMproxy certificate
//so we can ignore it with this env variable (not recommended)
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
//or add cert to the trust
const proxy = new HttpsProxyAgent.HttpsProxyAgent('http://127.0.0.1:8888');
//or take the PEM certificate and add it to node agent
const ca = fs.readFileSync ('/Users/HusseinNasser/Downloads/mitmproxy-ca-cert.pem')
const req = http.request("https://example.com",  { "method": "GET", "agent": proxy, "ca": ca});
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
