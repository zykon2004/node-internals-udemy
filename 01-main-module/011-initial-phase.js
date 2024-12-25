//all initial phase code execute synchronously before any callback or timers
//even if the timer is scheduled for 1 ms
const x = 1;
const y = x + 1;
setTimeout( () => console.log("Should run in 1 ms", 1));

for (let i = 0; i < 100000000; i++);

console.log("Will this be printed first or last?");
