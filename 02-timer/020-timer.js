const timerCallback = (a) =>
  console.log(`Timer callback ${a} ms delayed by ${Date.now() - start - a}`);

const start = Date.now();
setTimeout(timerCallback, 100, 100);
setTimeout(timerCallback, 0, 0);
setTimeout(timerCallback, 1, 1);
setTimeout(timerCallback, 300, 300);

//the initial phase sync execute this code (which takes ~380 ms), waits for it to finish
//then goes to the timer phase and noticed all timers are ready, so it executes the 4 callbacks at once
for (let i = 1; i <= 1_000_000_000; i++);
