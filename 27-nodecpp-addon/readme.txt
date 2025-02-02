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

//to Debug 

change package.json install and add Debug

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
            "args": ["/Users/HusseinNasser/projects/node-course-content/28-isprime.cpp/index.js"],
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



//note vscode might complain.. just create the file c_cpp_properties.json under .vscode 
//to tell it where it finds n_api
{
    "configurations": [
      {
        "name": "Mac",
        "includePath": [
          "${workspaceFolder}/**",
          "${workspaceFolder}/node_modules/node-addon-api",
          "${workspaceFolder}/node_modules/node-addon-api/include",
          "${workspaceFolder}/node_modules/node-addon-api/napi.h",
          "/usr/local/include/node", // Node.js headers (macOS/Linux)
          "/usr/include/node",       // Alternative Node.js include path
          "C:/Program Files/nodejs/include/node" // Windows (if applicable)
        ],
        "defines": [],
        "compilerPath": "/usr/bin/clang++",
        "cStandard": "c11",
        "cppStandard": "c++17",
        "intelliSenseMode": "macos-clang-x64"
      }
    ],
    "version": 4
  }
