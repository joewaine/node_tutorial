var http = require('http');



function onRequest(request,response){
    response.writeHead(200, {'content-type': 'text/plain'});
    response.write('hello world');
    response.end();
}

http.createServer(onRequest).listen(8888);


// function say(word) {
// console.log(word);
// }

// function execute(someFunction, value){
//   someFunction(value);
// }

// execute(say, "Hello");