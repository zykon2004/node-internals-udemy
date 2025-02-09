const https = require('node:https');
const fs = require('fs');

// Define certificate and private key
//Remember we can't do TLS without those two
//Private key for signing 
//certificate for the client to verify us (it has the public key)

/* you can generate private key and certificate
//create private key 
openssl genrsa -out private-key.pem 2048

//create certificate and self-sign it with the private key
openssl req -new -x509 -key private-key.pem -out certificate.pem -days 365
//we are reading them synchronously!
*/

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

//consume like  curl https://localhost:8443 --insecure 
//need to disable verification because our cert is not trusted
//OR add it to the cert store

