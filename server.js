var http = require('http');



// turn server script into a real module


function start(){


function onRequest(request,response){
    console.log('request received');
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('hello world');
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log('server has started');


}


exports.start = start;
