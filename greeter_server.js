const grpc = require('@grpc/grpc-js');

function sayHello(call, callback) {
    callback(null, {message: 'Hello ' + call.request.name});
}

function sayHelloAgain(call, callback) {
    callback(null, {message: 'Hello again, ' + call.request.name});
}

function main() {
    let server = new grpc.Server();
    server.addService(hello_proto.Greeter.service,
        {sayHello: sayHello, sayHelloAgain: sayHelloAgain});
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
    });
}