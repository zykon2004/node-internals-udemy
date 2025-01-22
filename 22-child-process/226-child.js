const { fork } = require('child_process');
const net = require('net');
const os = require('os');

const PORT = 3000;

if (process.env.WORKER) {
  // This is a worker process
  console.log(`Worker process ${process.pid} is starting`);

  // Create a TCP server
  const server = net.createServer();

  // Listen on the port with SO_REUSEPORT
  server.listen(
    {
      port: PORT,
      exclusive: false, // This enables SO_REUSEPORT
    },
    () => {
      console.log(`Worker ${process.pid} is listening on port ${PORT}`);
    }
  );

  // Handle incoming connections
  server.on('connection', (socket) => {
    console.log(`Worker ${process.pid} received a connection`);
    socket.end('Handled by worker ' + process.pid + '\n');
  });

} else {
  // This is the master process
  console.log(`Master process ${process.pid} is running`);

  const numCPUs = os.cpus().length;

  // Fork worker processes
  for (let i = 0; i < numCPUs; i++) {
    const worker = fork(__filename, [], { env: { WORKER: 'true' } });

    // Handle worker exit and respawn
    worker.on('exit', (code, signal) => {
      console.log(`Worker ${worker.pid} died. Respawning...`);
      fork(__filename, [], { env: { WORKER: 'true' } });
    });
  }
}
