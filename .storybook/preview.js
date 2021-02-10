import React from 'react';
import { addDecorator } from "@storybook/react";

import GlobalStyle from "../src/components/GlobalStyle";

addDecorator(storyFn => (

  <>
    <GlobalStyle />
    {storyFn()}
  </>
));


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
