console.log("start");
for (let i =0; i< 100000000; i++);
console.log ("end");
setTimeout(()=> console.log("timer"), 0);
process.nextTick( ()=>console.log("nextTick()")) 

