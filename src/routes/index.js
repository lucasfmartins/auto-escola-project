
import React from "react";
import {  Routes, Route } from "react-router-dom";

import Home from "routes/home"
import About from "routes/about";
import ProductDetail from "routes/servicos";

const appRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos/:slang" element={<ProductDetail />} />
  </Routes>
);

export default appRoutes;
