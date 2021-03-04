import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { parentResize } from "utils";
import "./index.css";

const viewport = document.querySelector("meta[name=viewport]");
const { innerWidth } = window;

if (innerWidth < 730) {
  viewport.setAttribute("content", "width=320, user-scalable=0");
  parentResize({ width: innerWidth, height: (innerWidth / 320) * 520 });
} else {
  parentResize({ width: 730, height: 560 });
}
const rootNode = document.getElementById("root");

if (rootNode) {
  ReactDOM.render(<App />, rootNode);
}
