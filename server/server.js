var grpc = require("grpc");
var path = require("path");
var protoLoader = require("@grpc/proto-loader");

const PROTO_PATH = path.join("../", "proto/ping_pong.proto");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

var server = new grpc.Server();

const pingPongHandler = function (call, callback) {
  console.log("Request");
  console.log("here");
  return callback(null, { pong: "Pong" });
};

server.addService(protoDescriptor.pingpong.PingPongService.service, {
  pingPong: pingPongHandler,
});

server.bind("0.0.0.0:8080", grpc.ServerCredentials.createInsecure());
server.start();
