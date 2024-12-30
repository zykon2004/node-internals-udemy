console.log("Start Initial phase")
function promiseWork () {
    return new Promise( (resolve, reject) =>  {
        setTimeout(() => {
            //done work
            console.log("--Processing...");
            const output = "done!"
            //resolve
            resolve(output)
        }, 4000)
    } )
}
console.log("Before running")
const x = promiseWork();
console.log("After running")

x.then(a => console.log("resolved " + a))
console.log("End Initial phase")
setTimeout(  () => console.log("timer"), 0);