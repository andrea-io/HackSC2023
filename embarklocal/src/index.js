import React, { StrictMode, useCallback } from 'react';
import {createRoot} from "react-dom/client"
import './index.css';
import App from "./App";

const root = createRoot(document.getElementById("root"));
console.log("created root");
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log("rendered app");