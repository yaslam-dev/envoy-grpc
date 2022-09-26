/**
 * @fileoverview gRPC-Web generated client stub for pingpong
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.3.1
// 	protoc              v3.20.1
// source: ../../../proto/ping_pong.proto

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require("grpc-web");

const proto = {};
proto.pingpong = require("../utils/ping_pong_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pingpong.PingPongServiceClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options.format = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, "");
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.pingpong.PingPongServicePromiseClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options.format = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, "");
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pingpong.PingRequest,
 *   !proto.pingpong.PongResponse>}
 */
const methodDescriptor_PingPongService_pingPong = new grpc.web.MethodDescriptor(
  "/pingpong.PingPongService/pingPong",
  grpc.web.MethodType.UNARY,
  proto.pingpong.PingRequest,
  proto.pingpong.PongResponse,
  /**
   * @param {!proto.pingpong.PingRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.pingpong.PongResponse.deserializeBinary
);

/**
 * @param {!proto.pingpong.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.pingpong.PongResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pingpong.PongResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pingpong.PingPongServiceClient.prototype.pingPong = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/pingpong.PingPongService/pingPong",
    request,
    metadata || {},
    methodDescriptor_PingPongService_pingPong,
    callback
  );
};

/**
 * @param {!proto.pingpong.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pingpong.PongResponse>}
 *     Promise that resolves to the response
 */
proto.pingpong.PingPongServicePromiseClient.prototype.pingPong = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/pingpong.PingPongService/pingPong",
    request,
    metadata || {},
    methodDescriptor_PingPongService_pingPong
  );
};

module.exports = proto.pingpong;
