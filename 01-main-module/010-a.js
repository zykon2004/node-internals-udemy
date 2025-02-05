//. means from the point of the current __filename
require ("./b.js") 
console.log("loading module a")

for (let i = 0; i < 100000000; i ++);

console.log("end module a")
