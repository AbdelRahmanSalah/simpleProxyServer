# Simple http server proxy

## Guid 
Simple http server act as a proxy you just need to configure the proxy mapping in config.js file
```js
var config = {
    host: process.env.PROXY_HOST || "localhost",
    port: process.env.PROXY_PORT || 8000,
    mappings: [["/1.0/.", "http://localhost:4000"], [".", "http://localhost:3000"]]
} 
```

Each index in the mapping array consisting of two parts first part the regex that if it matched the server will redirect the request to the server in the second part ordering is important
