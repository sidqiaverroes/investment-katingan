import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "swiper/css/bundle";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
