import React from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store, { persistor } from "./redux/store";
import { router } from "./router/Routes";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
