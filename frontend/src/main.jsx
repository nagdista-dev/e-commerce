import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// !IMPORTANT TO IMPORT THIS FILE
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
