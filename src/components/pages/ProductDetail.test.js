import React from "react";
import { render, screen } from "test-utils";

import { buildProduct } from "models/builders/products";
import ProductDetail from "./ProductDetail";

test("renders Product Detail page", () => {
  render(<ProductDetail product={buildProduct()} />);
  expect(
    screen.getByText("Fantastic Rubber Towels", { selector: "h1" })
  ).toBeInTheDocument();
});

// test('renders Product Detail page', () => {
//  render(<ProductDetail product={buildProduct()} />);
// });
