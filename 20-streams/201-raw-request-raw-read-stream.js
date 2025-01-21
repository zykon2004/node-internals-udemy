const http = require("node:http");
//request object is a writable stream
const req = http.request("http://example.com",  { "method": "GET"});

req.on("response", res => {
        //we tell node that we want to read this ourselves.. 
        //for that we attach a readable event 
        res.on("readable", ()=> {
            let x = res.read();
            console.log(x.toString())
            //when read returns null we are done.
            while(x != null)
            {
                console.log(x.toString());
                x = res.read();
            }
        })
        //call also assign an end event 
        res.on("end", ()=>console.log("response fully read! "))
       
     })

req.end();//no more data, we are done. wrap up
//this doesn't mean "send" , some data might have already been sent