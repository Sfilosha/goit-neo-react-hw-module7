import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store.js";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
