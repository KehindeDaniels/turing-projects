// routes.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
