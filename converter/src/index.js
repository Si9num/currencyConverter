import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const urlList = `${process.env.REACT_APP_URL + "USD"}`;
async function t() {
  const response = await fetch(urlList);

  let res = await response.json();
  sessionStorage.test = JSON.stringify(res.rates);
}
t();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Form />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
