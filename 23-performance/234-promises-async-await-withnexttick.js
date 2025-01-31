//if nextTick is called within a promise
//the initial phase ends immediately 
//anything after the wait, becomes a callback.. 
process.nextTick( ()=>console.log("TRUE END OF INITIAL PHASE--First next tick! "))
console.log("initial phase start...")
console.log ("Invoking async await ")
setTimeout (() => console.log("timer1"), 0)
const x= await test(); //anything after this point becomes the "callback.. " initail phase is technically done.. 
console.log ("Got result async wait " + x )
console.log("end phase start...")
process.nextTick( ()=>console.log("next tick"))
setTimeout (() => console.log("timer2"), 0)

async function test() {
    console.log("called test")
    const result = await test2(); //anything after this point becomes the "callback.. " initail phase is technically done.. 
    return result;
}
async function test2() {
    return new Promise( (resolve, reject )=> {
        //promise executing...
        console.log("about to call async promise await next tick..")
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