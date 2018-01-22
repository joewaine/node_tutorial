var http = require('http');
var url = require('url');


// turn server script into a real module


function start(){


function onRequest(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log('request for ' + pathname + ' received');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('hello world');
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log('server has started');
}

exports.start = start;

function route(pathname){
  console.log('about to route a request for' + pathname);
}

exports.route = route;