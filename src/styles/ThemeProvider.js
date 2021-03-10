import React from "react";
import { ThemeProvider } from "styled-components";


export const ThemeNames = {
  light: "light",
  ocean: "ocean"
}

const light = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121",
    },
    danger: {
      main: "#ff3d00",
      dark: "#d22a00",
      text: "#212121",
    },
    border: "rgba(0, 0, 0, 0.125)",
  },
};

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f4",
        dark: "#1769aa",
        light: "#4dabf5",
        text: "#fff",
      },
    },
  },
};

const ThemeProviderComponent = ({ theme, children }) => (
  <ThemeProvider theme={allThemes[theme]}>{children}</ThemeProvider>
);

ThemeProviderComponent.defaultProps = {
  theme: "light",
};

export default ThemeProviderComponent;
