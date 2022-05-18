import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route index element={<App />} />
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
