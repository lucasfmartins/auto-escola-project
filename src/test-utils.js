import React from "react";

import ThemeProviderComponent from "styles/ThemeProvider";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

const TestProvider = ({ children }) => (
  <Router>
    <ThemeProviderComponent>{children}</ThemeProviderComponent>
  </Router>
);

export * from "@testing-library/react";

//função que retonra o proprio render
//ui = component
// wrapper, passa o componente de provider, que faz o encapsulamento automatico
const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

//sobrescrevendo a importação do render
export { customRender as render };
