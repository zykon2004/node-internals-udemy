Installation guide
https://github.com/nodejs/node-addon-api/blob/main/doc/setup.md#installation-and-usage

Make sure to install cpp 
mac
xcode-select --install

create cpp file
sum.cpp

//create a package.json
npm init -y

//install N-API (you can make them dev dep, so they aren't installed when not required)
npm install node-addon-api

//install node-gyp
npm install node-gyp

//create binding.gyp

{
  "targets": [
    {
      "target_name": "sum",
      "sources": [ "sum.cpp" ],
      "include_dirs": ["node_modules/node-addon-api"],
      "dependencies": ["node_modules/node-addon-api/node_api.gyp:nothing"],
      "defines": ["NAPI_DISABLE_CPP_EXCEPTIONS"]
    }
  ]
}



npm install will run the build 

npm install  


//to remove the .cpp errors, copy the c_cpp_properties.json to .vscode
//this tells vscode where to find NAPI 


//to Debug 

change package.json install and add Debug
//change your paths
, add launcher .json 

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Node.js Addon",
            "type": "cppdbg",
            "request": "launch",
            "program": "/usr/local/bin/node",
            "args": ["/Users/HusseinNasser/projects/node-course-content/27-nodecpp-addon/index.js"],
            "stopAtEntry": false,
            "cwd": "${workspaceFolder}",
            "externalConsole": false,
            "MIMode": "lldb",  // Use "gdb" for Linux
            "setupCommands": [
              { "text": "-enable-pretty-printing", "description": "Enable pretty printing", "ignoreFailures": true }
            ]
          }
    ]
}



package.json should have node-gyp rebuild --debug or --release which builds 

{
  "name": "28-isprime.cpp",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "install": "node-gyp rebuild --debug"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "gypfile": true,
  "description": "",
  "dependencies": {
    "node-addon-api": "^8.3.0",
    "node-gyp": "^11.0.0"
  }
}

