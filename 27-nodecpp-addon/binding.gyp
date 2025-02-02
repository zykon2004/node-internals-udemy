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