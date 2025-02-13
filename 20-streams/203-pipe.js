//chaining pipes
//we read, , encrypt (duplex),compress (duplex) -> write.. 

//readstream --> (write) encrypt (duplex) (read) -> (write) compress (read) --> write to file
const fs = require('fs');
const crypto = require('crypto');
const gzip = require('node:zlib').createGzip();

// Encryption setup
const algorithm = 'aes-256-cbc'; // Encryption algorithm
//hard code keys/ivs
const key = Buffer.from("0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef", "hex") // 32 bytes key for AES-256
const iv = Buffer.from("abcdef9876543210abcdef9876543210", "hex") // Initialization vector (16 bytes)

//read stream from a file
const inp = fs.createReadStream('/Users/HusseinNasser/Desktop/Video.mp4');
//write stream to a file 
const out = fs.createWriteStream('/Users/HusseinNasser/Desktop/Video.mp4.enc.gz');
// Create a transform stream to handle encryption
const encryptStream = crypto.createCipheriv(algorithm, key, iv);

//write stream to encryption
//which then becomes readable
//we write it the zip stream
//pipe it finally out to a file 
inp.pipe(encryptStream).pipe(gzip).pipe(out)


