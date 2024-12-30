console.log("Start Initial phase")
function promiseWork () {
    return new Promise( (resolve, reject) =>  {
        //schedule to simulate slow process.
        setTimeout(() => {
            //done work
            console.log("--Processing...");
            const output = "done!"
            //resolve
            resolve(output)
        }, 4000)
    } )
}
async function run () {
    console.log("Before running")
    const x = await promiseWork();
    console.log("After running")
    console.log("resolved " + x)
}
console.log("End Initial phase")
run();