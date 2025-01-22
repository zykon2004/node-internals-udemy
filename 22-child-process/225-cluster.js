const cluster = require('cluster');
const net = require('net');
const os = require('os');

const PORT = 3000;

// Check if the current process is the master process
if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork workers based on the number of CPU cores
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Log worker exit and respawn
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Respawn the worker
  });

} else {
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
}
