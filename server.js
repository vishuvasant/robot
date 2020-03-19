const http = require('http');
 
const PORT = 4545;
 
const server = http.createServer((req, res) => {
  res.append('Content-Type', 'text/plain');
  res.end('Hello world!');
});
 
server.listen(PORT);