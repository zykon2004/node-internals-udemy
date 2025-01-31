//here we differed the execution of the promise
//to the check phase (offloading the initial phase and allowing loop to start)
//promise was resolved in the next tick after check.. 
//We scheduled promise to be executed in check phase,
//which means we allowed IO to be sent! 
//this is useful for sockets to establish connections /listening sockets early
//at least people can connect now ! 
//But the io callback got kicked later
process.nextTick( ()=>console.log("---TRUE END OF INITIAL PHASE--First next tick! "))
console.log("initial phase start...")
console.log ("Invoking promise then ")
ExpensivePromise().then(x=>console.log("Got result promise " + x ))
const fs = require("fs")
fs.readFile ( __filename , ()=> console.log( "IO executed."))
for (let j =0; j< 5_000_000_000; j++);
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
            for ( i =0; i< 10_000_000_000; i++);
            console.log("Promise resolved.")
            resolve("Counted" + i)
        })
      
    })
    
} 