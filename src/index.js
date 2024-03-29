import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/shopping-list">
      <App />
    </BrowserRouter>
  </Provider>
);
