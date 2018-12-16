var config = {
    host: process.env.PROXY_HOST || "localhost",
    port: process.env.PROXY_PORT || 8000,
    mappings: [["/1.0/.", "http://localhost:4000"], [".", "http://localhost:3000"]]
}

module.exports = config
