const fs = require("fs");

const p1 = '/Users/HusseinNasser/Desktop/udemy/backendcourse/Outline.mp4'
const p2 = '/home/hussein/large.file' //'/Users/HusseinNasser/Desktop/udemy/backendcourse/S3-HTTPS_QUIC_0RTT.mp4'
const start = Date.now();
/* 
We will read file multiple times, see where the bottlenecks are
*/

/*
The callback of readFile indicates the time the callback was executed
Not when the actual read has finished
It possible the read has finished a while back 
but poll phase didn’t picked it up
*/

//run with UV_THREADPOOL_SIZE=1 node 14-file-io/142-file-max.js 
//then run with UV_THREADPOOL_SIZE=8 node 14-file-io/142-file-max.js  

console.log ("Start reading with " + process.env.UV_THREADPOOL_SIZE + " threads")
const promises = []
for (let i =0;i < 4;i ++)
    promises.push(issueRead(p2));

//when all promises done count how long it took
Promise.all(promises).then (a=> console.log('read successfully' +  (Date.now() - start) + " ms" ));

function issueRead(p) 
{
    return new Promise (  (resolve, reject) => {
        fs.readFile(p, (err,data)=> 
            err ? reject(err): 
               resolve('read successfully' +  (Date.now() - start) + " ms")
        );

    })

}


