import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoralisProvider
        appId='d773VzUKSr8cstMWvPXav9OMh8gCG30URmHMN2rU'
        serverUrl='https://hnhky7jufeu5.usemoralis.com:2053/server'
      >
        <App />
      </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
