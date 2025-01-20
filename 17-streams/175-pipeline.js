const fs = require('fs');
const crypto = require('crypto');
const { pipeline } = require('stream');
const { createGzip } = require('zlib');

// Encryption setup
const algorithm = 'aes-256-cbc'; // Encryption algorithm
const key = Buffer.from("0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef", "hex"); // 32 bytes key for AES-256
const iv = Buffer.from("abcdef9876543210abcdef9876543210", "hex"); // Initialization vector (16 bytes)

// Create the streams
const inputFilePath = '/Users/HusseinNasser/Desktop/Video.mp4';
const outputFilePath = '/Users/HusseinNasser/Desktop/Video.mp4.enc.gz';
const inp = fs.createReadStream(inputFilePath);
const out = fs.createWriteStream(outputFilePath);
const encryptStream = crypto.createCipheriv(algorithm, key, iv);
const gzipStream = createGzip();

// Use pipeline to chain the streams
pipeline(
    inp,
    encryptStream,
    gzipStream,
    out,
    (err) => {
        if (err) {
            console.error('Pipeline failed:', err);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
);
