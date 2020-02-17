var http = require('http');

http.createServer(function (req, res) {
  
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("Sayfa bulunamadı");
  
}).listen(8080);






