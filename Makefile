install_grpc:
	npm install -g grpc-tools
protogen:
	grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=grpc_js:. proto/pages.proto