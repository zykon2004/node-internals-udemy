let val; 
function test () {
    console.log(val)
}
//if we call test() directly 
//the output is undefined
//if we call it through nextTick
//the output is 1
process.nextTick( test)
val = 1;
