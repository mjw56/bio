'use strict';

require('babel-core/register')({});

var server = require('./server').server;

const PORT = process.env.PORT || 5000;

server.listen(PORT, function () {
  console.log('Server listening on: ' + PORT);
});
