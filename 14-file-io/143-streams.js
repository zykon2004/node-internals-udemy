const fs = require("fs");

//fallocate -l 1G large.file 
const p = '/home/hussein/large.file' //'/Users/HusseinNasser/Desktop/udemy/backendcourse/Outline.mp4'

const stream = fs.createReadStream(p);

stream.on('data', (chunk) => {
    console.log('Chunk:', chunk.length); // Process each chunk
});

stream.on('end', () => {
    console.log('File reading completed.');
});

stream.on('error', (err) => {
    console.error('Error reading file:', err);
});

 
