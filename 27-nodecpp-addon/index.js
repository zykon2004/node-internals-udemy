const sumAddon = require('./build/Debug/sum.node');

function callback(err, result) {
    if (err) {
        console.error("Error:", err);
        return;
    }
    console.log("Sum:", result);
}

// Call the C++ function with two numbers and a callback
sumAddon.addNumbers(5, 10, callback);