import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import "./index.css";

const rootNode = document.getElementById("root");

if (rootNode) {
  ReactDOM.render(<App />, rootNode);
}
