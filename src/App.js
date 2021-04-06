import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProviderComponent from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "routes";

function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProviderComponent>
  );
}

//igual ao de cima
// const App = () => (

// )

export default App;

//exporta para Index.js
