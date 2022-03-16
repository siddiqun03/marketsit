import React from "react";
import ReactDOM from "react-dom";
import { Provider as Langcontext } from "./context/langContext";
import { Provider as Totally } from "./context/Totally";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Langcontext>
      <Totally>
      <App />
      </Totally>
    </Langcontext>
  </React.StrictMode>,
  document.getElementById("root")
);
