// noinspection StatementWithEmptyBodyJS

const net = require("net");
const start = Date.now();
console.log(`START`);

const clientFail = new net.Socket();
clientFail.setTimeout(3000, () => timeoutHandler());
clientFail.on("error", (err) => errorHandler(err, "clientFail"));
// Calling it this way won't work because timeoutHandler is not yet defined
// clientFail.setTimeout(3000, timeoutHandler);

// It's also possible to do it this way:
// clientFail.setTimeout(3000);
// clientFail.on("timeout", timeoutHandler);
const timeoutHandler = () => {
  console.log(`Timeout after ${Date.now() - start}`);
  // calling clientFail.end() will not end the program because the socket attempts to exit gracefully
  clientFail.destroy(new Error("Trigger error callback for pleasure"));
};

const clientSuccess = new net.Socket();
clientSuccess.on("error", (err) => errorHandler(err, "clientSuccess"));

const errorHandler = (err, clientName) => {
  console.error(`Connection error on ${clientName}: ${err.message}`);
  console.log(`Exited after ${Date.now() - start}`);
};
// Will be registered in the pending callback
// That's why timeout is added, to end it early
clientFail.connect(9999, "192.168.2.99", () => {
  console.log(`Connected to server at 192.168.2.99:${9999}`);
});
// Will be registered in the poll callback
clientSuccess.connect(80, "142.250.188.23", () => {
  console.log(`Connected to server at 142.250.188.23:${80}`);
  clientSuccess.end();
  console.log("Ended 142.250.188.23:80");
});

for (let i = 1; i <= 500_000_000; i++);
setTimeout(() => console.log("timer!"), 0);
console.log(`END`);
