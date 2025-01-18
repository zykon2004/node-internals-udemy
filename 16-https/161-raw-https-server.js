const https = require('node:https');
const fs = require('fs');

// Define the paths to your SSL certificate and private key
const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

// Create an HTTPS server
const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello , on HTTPS!\n');
});
 
// Start the server
server.listen(8443, () => {
  console.log(`HTTPS server is running on https://localhost:8443`);
});

//consume like  curl https://localhost:8443 --insecure -very

