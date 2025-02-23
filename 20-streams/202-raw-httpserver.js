const http = require("node:http");
//override the highwater mark 
//default is 64K
//run with default, send this request
// head -c 10240000 /dev/zero | curl -X POST --data-binary http://192.168.7.179:8080
//then run with the overriden hwm
const server = http.createServer({"highWaterMark": 300_000} );

//const server = http.createServer( );

server.on("request", (req, res) => {
    //default is 65536
    //https://github.com/nodejs/node/blob/55c42bc6e5602e5a47fb774009cfe9289cb88e71/lib/_stream_readable.js#L45
    console.log("req highWaterMark" + req.readableHighWaterMark)
    //req is a readable stream on the server
    //body is not read by default (can be large)
   req.on("readable", () => {
          function readChunk() {
            //delay reading so we fill up the stream buffer.
            let chunk = req.read(); 
            if (chunk == null) return;
            console.log("reading..." + chunk.toString().length);
           } 
         //read every second so the _read is called
	 setTimeout(readChunk, 1000);
	  
   });
	//req.on("data", data => {
        //only executed when there is a body in the request 
        //like POST, headers are implicitly read and prepared for us
        //by the http lib
      //  console.log("reading request" + data.toString().length)
   // })
	//
	//
	
    //res is a writable stream on the server 
    res.statusCode= 200;
    res.setHeader("content-type", "text/plain")
    res.write("hello world" + req.url) 
    res.end();
})
//send this request curl http://localhost:8080 -X POST -d "key1=value1"
 server.listen(8080, ()=> console.log("Actualy listening.."));
 
