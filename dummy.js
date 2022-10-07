var http = require("http");
var fs = require("fs");
var events = require('events');
var eventEmitter = new events.EventEmitter();
var fireFunction = function () {
  console.log("event fired");
};
let res=undefined
http
  .createServer((req, res) => {
    fs.readFile("text.html",function (err, data) {
     if(err)
     {
        res.writeHead(404,{"Content-Type":"text/html"}) 
        res.write("404! not found");
        console.log(err)
        res.end();
     }
     res.writeHead(200,{"Content-Type":"text/html"}) 
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
//   eventEmitter.emit(res);