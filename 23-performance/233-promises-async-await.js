//in async / await the promise is executed
//in the initial phase and resolve callback
//is also executed in the initial phase .
process.nextTick( ()=>console.log("TRUE END OF INITIAL PHASE--First next tick! "))
console.log("initial phase start...")
console.log ("Invoking async await ")
setTimeout (() => console.log("timer1"), 0)
const x= await test();  
console.log ("Got result async wait " + x )
console.log("end phase start...")
process.nextTick( ()=>console.log("next tick"))
setTimeout (() => console.log("timer2"), 0)

async function test() {
    console.log("called test")
    const result = await test2(); 
    console.log("got result " + result)
    return result;
}
async function test2() {
    return new Promise( (resolve, reject )=> {
        //promise executing...
  
            console.log("Promise executing....")
            let i =0;
            for ( i =0; i< 10000000000; i++);
            console.log("Promise resolved.")
            resolve("Counted" + i)
     
      
    })
    
}  