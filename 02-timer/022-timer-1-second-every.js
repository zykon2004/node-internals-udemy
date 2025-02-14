let start = Date.now();
const timerCallback = (a,b) => 
    {
        console.log(`Timer callback ${a} delayed by ${Date.now() - start - b}`)
        start = Date.now();
        setTimeout(timerCallback, 1000, '1000 ms',1000); 

    };

setTimeout(timerCallback, 1000, '1000 ms',1000); 

//the initial phase sync execute this code (which takes 380 ms), waits for it to finish
//then goes to the timer phase and noticed all timers are ready except one, so it executes the 4 callbacks at once 
// and then waits until the next timer is ready (6 second one) then picks it up 
for (let i = 1; i <= 1_000_000_000; i++);
