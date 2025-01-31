//here we break the promise execution function into partitions 
//each partition is scheduled in the next check phase ..
//offloading the main process to 'breath' 
//which means we allowed IO to be sent! 
//this is useful for sockets to establish connections /listening sockets early
//at least people can connect now ! 
//and we get the io whenver we get it as soon as possible

process.nextTick( ()=>console.log("---TRUE END OF INITIAL PHASE--First next tick! "))
console.log("initial phase start...")
console.log ("Invoking promise then ")
ExpensivePromise().then(x=>console.log("Got result promise " + x ))
const { count } = require("console")
const fs = require("fs")
fs.readFile ( __filename , ()=> console.log( "IO executed."))
for (let j =0; j< 1_000_000_000; j++);
console.log("end initial phase...")
process.nextTick( ()=>console.log("next tick"))
setTimeout (() => console.log("timer done! , next is io"), 0)
 
async function ExpensivePromise() {
    return new Promise( (resolve, reject )=> {
        //promise executing...
        console.log("invoking promise function, about to call next tick..")
        setImmediate ( ()=> {
            console.log("next set immediate executed..")
            console.log("Promise executing....")
           
            let i =0; 
            const maxCount = 1_000_000_000;
             //let us break the execution 
             function countingIt (start, end ){
                //if we get to 10m resolve 
                if (i >= maxCount) {
                  console.log("Promise resolved.")
                  resolve("Counted" + i)
                  return;
                }
              //console.log (`counting .. ${start} to ${end}`)
              for ( i =start; i< end; i++);
              setImmediate (countingIt, start+ 1_000_000, end + 1_000_000)
            
             }
                //break it to smaller parts, 
                //we want to make the blocking as small as possible..
                
             countingIt(1, 1_000_000);
         
             
        })
      
    })
    
} 