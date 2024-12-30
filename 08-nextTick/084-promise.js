console.log("Start Initial phase")
const x = new Promise( (resolve, reject) =>  resolve("hello") )

x.then( a => console.log("resolved " + a))
console.log("End Initial phase")

setTimeout(  () => console.log("timer"), 0);

