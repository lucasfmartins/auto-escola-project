import React from "react";
import { render } from "test-utils";

import Feature from "./Feature";

test('render the title', () => {
 const { getByText } = render(<Feature title="My Title" />);

 expect(getByText("My Title")).toBeInTheDocument();
});


test('render the children', () => {
  const { getByText } = render(<Feature title="My children" />);
 
  expect(getByText("My children")).toBeInTheDocument();
 });
