const fs = require("fs");

const fd = fs.openSync(__filename)
console.log("file descriptor " + fd)
console.log(fs.readFileSync(fd, 'utf-8'))
fs.closeSync(fd);