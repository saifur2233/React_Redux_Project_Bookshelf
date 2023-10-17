import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import routes from "./routers/index.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={routes}></RouterProvider> */}
      <App></App>
    </Provider>
  </React.StrictMode>
);
