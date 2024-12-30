console.log("Start Initial phase")

function promiseWork (callback) {
    //return new Promise( (resolve, reject) =>  resolve(output) )
    //do work
    console.log("Processing...");
    const output = "done!"
    //done work, resolve 
    process.nextTick( callback, output )
}
console.log("Before running")

promiseWork( result => {
        console.log("resolved " + result)
    } );
console.log("After running")

console.log("End Initial phase")
setTimeout(  () => console.log("timer"), 0);