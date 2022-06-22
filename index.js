const http = require("http")
const PORT = 80

const server = http.createServer((req, response) => {
    response.write("Hello world")
    response.end()
})

server.listen(PORT)

if (PORT === 80) {
    console.log(`Server is listening on port ${PORT} at http://localhost`);
} else {
    console.log(`Server is listening on port ${PORT} at http://localhost:${PORT}`);
}