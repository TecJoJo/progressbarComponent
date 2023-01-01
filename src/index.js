import React from "react";
import ReactDOM from "react-dom/client";
import Progressbar from "./component/Progressbar";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Progressbar
      skill="React.js"
      skillColor="pink"
      score={70}
      duration={2000}
      bgcolor1="rgb(66, 197, 245,0.3)"
      bgcolor2="rgb(201, 125, 245,0.8)"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
