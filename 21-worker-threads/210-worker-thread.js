const WorkerThreads = require('node:worker_threads');;

//this tells us whether we are on the main thread or worker
  if (WorkerThreads.isMainThread) {
    //spin a new thread running the same file 
    console.log("I'm parent thread: " + WorkerThreads.threadId)
    const worker = new WorkerThreads.Worker(__filename);
    
  } else {
    
    console.log("I'm a worker thread: " + WorkerThreads.threadId)

   } 