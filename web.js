var express = require('express');

var app = express.createServer(express.logger());
app.use('/public',express.static(__dirname + '/public'));
app.get('/', function(request, response) {

var fs = require('fs');

var buffer = fs.readFileSync('index.html');	
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
