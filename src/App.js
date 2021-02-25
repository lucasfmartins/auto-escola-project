import React from "react";

import ThemeProviderComponent from "styles/ThemeProvider";
import GlobalStyle from "styles/GlobalStyle";

import Home from "components/pages/Home";

function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyle />
      <Home />
    </ThemeProviderComponent>
  );
}

//igual ao de cima
// const App = () => (

// )

export default App;

//exporta para Index.js
