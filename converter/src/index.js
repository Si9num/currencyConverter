import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Form />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
