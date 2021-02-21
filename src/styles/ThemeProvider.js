import React from "react";
import {ThemeProvider} from "styled-components";

const theme = {
  color: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121",
    },
    danger: {
      main: "#ff3d000",
      dark: "#d22a00",
      text: "#212121"
    }
  }
};

const ThemeProviderComponent = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default ThemeProviderComponent;

