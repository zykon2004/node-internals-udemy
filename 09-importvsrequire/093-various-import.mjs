console.log("start")
//returns a promise
if (1==2) {
const a = import ("./a.js")
console.log(a)
}

setTimeout( ()=> console.log("timer"),0);
//resolves the promise and get x (returns a module)
const b = await import ("./b.mjs")//true intial phase..
console.log(JSON.stringify(b))
//resolves the promise ( like await)
//but returns the value
import c from "./c.mjs"
console.log(JSON.stringify(c))
process.nextTick(()=>console.log("Initial phase end."))

/*
if (1=2 ) {



import  xx from "./c.mjs"
console.log(xx)
}*/

console.log("end")