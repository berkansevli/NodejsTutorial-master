var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    if(err != null){
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.write("HATA!!!!");
      res.end();
    }
    else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }

  });
}).listen(8080);
