const http = require("node:https");
//request object is a writable stream
//large json
const req = http.request("https://raw.githubusercontent.com/json-iterator/test-data/refs/heads/master/large-file.json",  { "method": "GET"});

req.on("response", res => {
        //we tell node that we want to read this ourselves.. 
        //for that we attach a readable event 
        //this will be called everytime there is something to read
        res.on("readable", ()=> {
            let x = res.read();
            if (x == null) return; //quit if its null
            console.log(x.toString().length)
        })
        //call also assign an end event 
        res.on("end", ()=>console.log("response fully read! "))
       
     })

req.end();//no more data, we are done. wrap up
//this doesn't mean "send" , some data might have already been sent