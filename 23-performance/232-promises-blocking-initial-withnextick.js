//here we differed the execution of the promise
//to the next tick (offloading the initial phase )
//promise was resolved in the next tick.. 
//we are still blocking io..
process.nextTick( ()=>console.log("TRUE END OF INITIAL PHASE--First next tick! "))
console.log("initial phase start...")
console.log ("Invoking promise then ")
test2().then(x=>console.log("Got result promise " + x ))
console.log("end initial phase...")
process.nextTick( ()=>console.log("next tick"))
setTimeout (() => console.log("timer"), 0)
 
async function test2() {
    return new Promise( (resolve, reject )=> {
        //promise executing...
        console.log("invoking promise function, about to call next tick..")
        process.nextTick( ()=> {
            console.log("next tick executed..")
            console.log("Promise executing....")
            let i =0;
            for ( i =0; i< 10000000000; i++);
            console.log("Promise resolved.")
            resolve("Counted" + i)
        })
      
    })
    
} 