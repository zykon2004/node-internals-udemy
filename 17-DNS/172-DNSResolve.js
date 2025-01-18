const dns = require('dns');
//this always go DNS (network)
//this is just a normal network io (epoll)
dns.resolve4('example.org', (err, address) => {
console.log('addresses: %j', address);});