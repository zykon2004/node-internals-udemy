const dns = require('dns');
console.log("Before DNS lookup")
//this may do a DNS, it looks up hosts file and if nothing is there it may do DNS
//it is still async but goes onto the UVthread
dns.lookup('example.org', (err, address, family) => {
console.log('address: %j family: IPv%s', address, family);});

console.log("After DNS lookup")
