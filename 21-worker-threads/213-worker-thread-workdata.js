//workerData is passed as an argument
//and let each worker do work
//count all primes between two numbers
//send the result to the parent
const WorkerThreads = require('node:worker_threads');;

   if (WorkerThreads.isMainThread) {
    //spin a new thread running the same file
    //pass in data.
    const threadCount = 4; //try to match the core count
    const x = {"workerData":  {"from": 1, "to": 100_000_000}} 
    for (let i =0 ; i < threadCount; i++){
      x.workerData.from += 100_000_000;
      x.workerData.to += 100_000_000;
      const worker = new WorkerThreads.Worker(__filename, x);
      worker.on("message", message => {
         //worker responded with work
         console.log (`Parent: Worker ${worker.threadId} found ${message.primes} primes between ${x.workerData.from} to ${x.workerData.to}.`)
      })
    }
    
  } else {
      
      //we got work from parent 
      const workerData =WorkerThreads.workerData ;

      console.log (`Worker ${WorkerThreads.threadId}: Started working finding primes between ${workerData.from} to ${workerData.to}... `)
      const primes = []
      for (let i = workerData.from; i < workerData.to; i++)
           if (isPrime(i)) primes.push(i)
      
      //worker done lets tell the parent
      WorkerThreads.parentPort.postMessage ({"primes": primes.length})
      console.log (`Worker ${WorkerThreads.threadId}: Done.`)

   } 

   function isPrime(num) {
     if (num < 2) return false;
  
     for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) {
        return false;
      }
    }
  
     return true;
  }