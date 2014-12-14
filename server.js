var http = require('http');
var request = require('request');
var url = require('url');
var host = process.env.TARGET; // set config variable TARGET to whatever host

var app = http.createServer(function (req, resp) {

  // modify headers as needed
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
  resp.setHeader("Access-Control-Allow-Methods", "GET");

  request.get({url:host + req.url, timeout: 20000}, function (error, response) {
    if (!error && response.statusCode == 200) {
      //
    } else {
      req.pause();
      resp.status = 400;
      resp.end('error');
    }
  }).pipe(resp);

});

var port = process.env.PORT;
app.listen(port, function() {

});