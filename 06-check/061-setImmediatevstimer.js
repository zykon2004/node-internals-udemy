// timeout_vs_immediate.js
//if lib_uv got thread got delayed for 
//any reason (kernel/os issue)
//setImmedaite will run first 
//so this output is indetermistic 
setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });