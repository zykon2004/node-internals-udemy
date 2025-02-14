//example 

/*
This is a primitive value, v8 detects that and stores it in the stack 
*/
let x = 5; 

/*
This is an object, y is a pointer that is allocated in the stack
the object iself is allocated in the heap 
*/
let y = {"a": 10, "b": 20}; 

/*
Array is also an object, z is a pointer that is allocated in the stack
the object iself is allocated in the heap 
*/
let z = [90, 80]