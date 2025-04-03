
const timerCallback = (delay) => console.log(`Timer callback ${delay} delayed by ${Date.now() - start - delay}`);

const start = Date.now();
setTimeout(timerCallback, 100, 100);
setTimeout(timerCallback, 0, 0);
setTimeout(timerCallback, 1,  1);
setTimeout(timerCallback, 300,  300);
setTimeout(timerCallback, 6000,  6000);

//the initial phase sync execute this code (which takes 380 ms), waits for it to finish
//then goes to the timer phase and noticed all timers are ready except one, so it executes the 4 callbacks at once 
// and then waits until the next timer is ready (6 second one) then picks it up 
//for (let i = 1; i <= 1_000_000_000; i++);
