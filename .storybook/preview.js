import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProviderComponent, {
  ThemeNames,
} from "../src/styles/ThemeProvider";

addDecorator((storyFn) => (
  <>
    <ThemeProviderComponent
      theme={select("Theme", ThemeNames, ThemeNames.light)}
    >
      <GlobalStyle />
      {storyFn()}
    </ThemeProviderComponent>
    {/* {storyFn()} */}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

//variavel
//mobile first como padão, antes da primeira queda
const viewports = {
  extraSmall: {
    name: "Portrairt phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },

  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },

  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },

  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },

  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};
//configura todos os addons, deixando viewport como variavel
//para definir os dispositivos que queremos ver na listagem
addParameters({
  viewport: {
    viewports,
  },
});
