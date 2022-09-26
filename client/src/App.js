import React, { Component, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

const pingpong = require("./services/ping_pong_grpc_web_pb");
const requests = require("./utils/ping_pong_pb.js");

const client = new pingpong.PingPongServiceClient(
  "http://localhost:9000",
  null,
  null
);

function App() {
  const callGrpcService = (e) => {
    e.preventDefault();
    const request = new requests.PingRequest();
    request.setPing("Ping");

    client.pingPong(request, {}, (err, response) => {
      if (response == null) {
        console.log(err.message);
      } else {
        alert(response.array[0]);
        console.log(response);
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button style={{ padding: 10 }} onClick={callGrpcService}>
          Click for grpc request
        </button>
      </header>
    </div>
  );
}

export default App;
