function sayHello(call, callback) {
    callback(null, {message: 'Hello ' + call.request.name});
}

function sayHelloAgain(call, callback) {
    callback(null, {message: 'Hello again, ' + call.request.name});
}

