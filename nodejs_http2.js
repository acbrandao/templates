var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname , filename = path.join(process.cwd(), uri);

var timestamp = new Date().toISOString();
var ip= request.connection.remoteAddress || request.socket.remoteAddress;
console.log(timestamp+ " ip:"+ip+" Served Request URL: "+request.url);  

  var contentTypesByExtension = {
    '.html': "text/html",
    '.css':  "text/css",
    '.js':   "text/javascript" ,
     '.json': "application/json"
  };

   // 404 - File not found
  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    // default filename to index.html if one is not given
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    //issue standard file read and send out the web page
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      //adjust the headers based on array of known file content contentTypesByExtension
      var headers = {};
      var contentType = contentTypesByExtension[path.extname(filename)];
      if (contentType) headers["Content-Type"] = contentType;
      response.writeHead(200, headers);
      response.write(file, "binary");
      response.end();

    });



  });


}).listen(parseInt(port, 10));

console.log("Static file server running at  ");
console.log('\x1b[1m\x1b[32m' ,"=> http://localhost:" + port  );
console.log('\x1b[0m',"\n-------------------------------/\nCTRL + C to shutdown \n");
