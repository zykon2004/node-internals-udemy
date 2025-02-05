import fs from "node:fs"
const x = 1;
const y = 2;
const z = x + y;
function timer1Callback() { console.log("timeout elapsed 1ms")}
function timer2Callback() {fs.readFile ("c.txt", readFileCCallback)}
function readFileCCallback() {console.log("read c after a second")}
function writeFileBCallback() {
        //setTimeout 1000ms
        console.log("write b.txt");
        setTimeout( timer2Callback,1000);
}
function readFileACallback() {
        //writeFile b
        console.log("read a.txt");
        fs.writeFile("b.txt", "test", writeFileBCallback);
}
fs.readFile ("a.txt", readFileACallback);
//setTimeout 1ms
setTimeout(timer1Callback, 1);
