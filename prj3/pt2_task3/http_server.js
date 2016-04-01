'use strict';

const http = require('http');

const PORT = 5555;

http.createServer((req, res) => {

  // Log all query parameters
  console.log(req.url.split('?').pop().split('='));

  // Respond `Hello, World` on every request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});