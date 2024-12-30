function readFilePromise (file) {
    return new Promise ( (resolve, reject) => {
        const fs = require("fs")
        fs.readFile(file, (err, data) => {
            //when we get this call resolve
            if (err) 
                reject(err)
            else
                resolve(data.toString())
        })
    })
 }

 async function read () {
    console.log (await readFilePromise (__filename))
 }

 read();