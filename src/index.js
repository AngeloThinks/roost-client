import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faChevronLeft,
  faTrashAlt,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
// import "typeface-roboto";
import "./index.css";

console.log(process.env);

library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
