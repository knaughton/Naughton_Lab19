// server.js
http.createServer(onRequest).listen(8888);

function onRequest(request, response) {
  response.writeHead(200, { "Content-type": "text/plain"});
  response.write(generator.pass());
  response.end();
}

var http = require('http');
var generator = require('./generator');

generator.pass();
