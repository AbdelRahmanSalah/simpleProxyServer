var request = require("request")
const config = require("./config")
const http = require('http');
// Create an HTTP server
const srv = http.createServer((req, res) => {
    var baseForwardUrl = config.mappings.filter(elm => new RegExp(elm[0]).test(req.url))[0][1]
    var forwardUrl = `${baseForwardUrl}${req.url}`
    req.pipe(
        request[req.method.toLowerCase()](forwardUrl))
      .pipe(res)
  });

srv.listen(config.port, config.host, () => { console.log(`server running on ${config.port} ${config.host}`) })
