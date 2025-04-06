

console.log("Start Initial phase")
function promiseWork () {
    console.log("before new promise")
    return new Promise( (resolve, reject) =>  {
        console.log("inside new promise")
       // setTimeout(() => {
            //done work
            console.log("--Processing...");
            const output = "done!"
            //resolve
            resolve(output)
        //}, 4000)
    } )
}
console.log("Before running")
const x = promiseWork();
console.log(x)
console.log("After running")

x.then(a => console.log("resolved " + a)).catch(a=>console.err)
console.log("End Initial phase")
setTimeout(  () => console.log("timer"), 0);
