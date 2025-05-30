import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "./redux/shoppingCart/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
