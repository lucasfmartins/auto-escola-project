import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ThemeProviderComponent from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";

import Home from "components/pages/Home";
import About from "components/pages/About";
import ProductDetail from "components/pages/ProductDetail";

function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  );
}

//igual ao de cima
// const App = () => (

// )

export default App;

//exporta para Index.js
