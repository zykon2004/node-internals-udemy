//here we differed the execution of the promise
//to the next tick (offloading the initial phase )
//promise was resolved in the next tick.. 
//we are still blocking io.. (io executed last)
//if this was a listening socket no body can connect for a while
console.time("IP")
process.nextTick( () => console.timeEnd("IP"));
process.nextTick( ()=>console.log("TRUE END OF INITIAL PHASE--First next tick! "))
console.log("initial phase start...")
console.log ("Invoking promise then ")
ExpensivePromise().then(x=>console.log("Got result promise " + x ))
const fs = require("fs")
fs.readFile ( __filename , ()=> console.log( "IO executed."))
for (let j =0; j< 5_000_000_000; j++);
console.log("end initial phase...")
process.nextTick( ()=>console.log("next tick"))
setTimeout (() => console.log("timer done next is io"), 0)
 
async function ExpensivePromise() {
    return new Promise( (resolve, reject )=> {
        //promise executing...
        console.log("invoking promise function, about to call next tick..")
        process.nextTick ( ()=> {
            console.log("next tick executed..")
            console.log("Promise executing....")
            let i =0;
            for ( i =0; i< 10000000000; i++);
            console.log("Promise resolved.")
            resolve("Counted" + i)
        })
      
    })
    
} 