// This file renders the main application component (App) and provides the Redux store using the Provider component.


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

// Redux Provider for providing the store to the components
import { Provider } from "react-redux";

// Redux store
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
