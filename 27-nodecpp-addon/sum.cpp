#include <napi.h>

// Function that adds two numbers and returns the result via a callback
void AddNumbers(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    // Get the global object (which contains `console`)
    Napi::Object global = env.Global();
    Napi::Object console = global.Get("console").As<Napi::Object>();

    // Get `log` function from `console`
    Napi::Function log = console.Get("log").As<Napi::Function>();

    // Call `console.log("Hello from C++ addon!")`
    log.Call(console, { Napi::String::New(env, "Hello from C++ addon!") });


    // Check if there are exactly 3 arguments (2 numbers + 1 callback)
    if (info.Length() != 3 || !info[0].IsNumber() || !info[1].IsNumber() || !info[2].IsFunction()) {
        Napi::TypeError::New(env, "Expected two numbers and a callback").ThrowAsJavaScriptException();
        return;
    }

    // Extract numbers
    double num1 = info[0].As<Napi::Number>().DoubleValue();
    double num2 = info[1].As<Napi::Number>().DoubleValue();
    
    // Compute sum
    double sum = num1 + num2;

    // Get the callback function
    Napi::Function callback = info[2].As<Napi::Function>();

    // Call the callback with the result
    callback.Call({ env.Null(), Napi::Number::New(env, sum) });
}

// Register the function as a Node.js module
Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "addNumbers"), 
        Napi::Function::New(env, AddNumbers));
    return exports;
}

NODE_API_MODULE(sum, Init)