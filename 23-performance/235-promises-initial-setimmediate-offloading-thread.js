//here we differed the execution of the promise to a  different thread
//offloading the main process completely
//promise was executed and resolved in the thread's check phase
//which means we allowed IO to be sent! 
//this is useful for sockets to establish connections /listening sockets early
//at least people can connect now ! 
//and we get the io whenver we get it as soon as possible
console.time("IP")
process.nextTick( () => console.timeEnd("IP"));
const WorkerThreads = require('node:worker_threads');;
//this tells us whether we are on the main thread or worker
  if (WorkerThreads.isMainThread) {
    //spin a new thread running the same file 
    console.log("I'm parent thread: " + WorkerThreads.threadId)
   
    /*main work*/

    process.nextTick( ()=>console.log("---TRUE END OF INITIAL PHASE--First next tick! "))
    console.log("initial phase start...")
    console.log ("spin a thread ... ")
    const worker = new WorkerThreads.Worker(__filename);
    console.log ("thread spun!... ")
    worker.on("message", message=> console.log ("got a message from a thread .. " + message))
    const fs = require("fs")
    fs.readFile ( __filename , ()=> console.log( "IO executed."))
    for (let j =0; j< 1_000_000_000; j++);
    console.log("end initial phase...")
    process.nextTick( ()=>console.log("next tick"))
    setTimeout (() => console.log("timer done! , next is io"), 0)
     
    /*end maian work*/

  } else {
    console.log("---worker woke up!" )
    console.log("---worker executing prommise!" )

    //child thread gets its own loop
    //execute the expensive promise
    ExpensivePromise().then(x=>{ 
        console.log("worker Got result promise " + x )
        //send it to parent
        WorkerThreads.parentPort.postMessage("worker Got result promise " + x)
        //we are done..
    })
    
   } 




   async function ExpensivePromise() {
    return new Promise( (resolve, reject )=> {
        //promise executing...
        console.log("invoking promise function, about to call next tick..")
        setImmediate ( ()=> {
            console.log("next set immediate executed..")
            console.log("Promise executing....")
            let i =0;
            for ( i =0; i< 10_000_000_000; i++);
            console.log("Promise resolved.")
            resolve("Counted: " + i)
        })
      
    })
    
} 