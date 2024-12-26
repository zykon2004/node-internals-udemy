
const timerCallback = (a,b) => console.log(`Timer callback ${a} delayed 
    by ${Date.now() - start - b}`);

const start = Date.now();
setTimeout(timerCallback, 100, '100 ms',100);
setTimeout(timerCallback, 0, '0 ms',0);
setTimeout(timerCallback, 1, '1 ms', 1);
setTimeout(timerCallback, 300, '300 ms', 300);

//the initial phase sync execute this code (which takes ~380 ms), waits for it to finish
//then goes to the timer phase and noticed all timers are ready, so it executes the 4 callbacks at once
for (let i = 1; i <= 100000000; i++);
