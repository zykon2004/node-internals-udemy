#include <napi.h> //import the napi header 

// Function to check if a number is prime 
//native simple c++ (Node can't see this yet)
bool IsPrime(int number) {
  if (number <= 1) return false;
  for (int i = 2; i * i <= number; ++i) {
    if (number % i == 0) return false;
  }
  return true;
}

// N-API wrapper function 
//need to wrap it so node can see it and call it 
//and yes we need a special call back so we can call JS back
Napi::Boolean IsPrimeWrapped(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();

  // Ensure there is one argument and it is a number
  if (info.Length() < 1 || !info[0].IsNumber()) {
    Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
    return Napi::Boolean::New(env, false);
  }

  int number = info[0].As<Napi::Number>().Int32Value();
  bool result = IsPrime(number);

  return Napi::Boolean::New(env, result);
}

// Initialize the module and export functions
Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "isPrime"),
              Napi::Function::New(env, IsPrimeWrapped));
  return exports;
}

NODE_API_MODULE(prime_checker, Init)
