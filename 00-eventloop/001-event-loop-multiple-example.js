import fs from "node:fs"
const x = 1;
const y = 2;
const z = x + y;
fs.readFile ("a.txt", 
    //readFile a
    () => 
    { 
        //writeFile b
        console.log("read a.txt");
        fs.writeFile("b.txt", "test", () => {
            //setTimeout 1000ms
            console.log("write b.txt");
            setTimeout( ()=> {
                fs.readFile ("c.txt", 
                            //read file c
                            () => console.log("read c after a second")
                        );
            },1000);
        });
    });
    

//setTimeout 1ms
setTimeout( () => console.log("timeout elapsed 1ms"), 1);
