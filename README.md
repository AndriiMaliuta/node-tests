
This is the static code generation variant of the Node. Code in these examples is pre-generated using protoc and
the Node gRPC protoc plugin, and the generated code can be found in various *_pb.js files. 
The command line sequence for generating those files is as follows (assuming that protoc and
grpc_node_plugin are present, and starting in the directory which contains this README.md 
file):
```
npm install -g grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=grpc_js:. proto/pages.proto
#grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../node/static_codegen/route_guide/ --grpc_out=grpc_js:../node/static_codegen/route_guide/ route_guide.proto
```