import React from 'react';
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
})

test('renders About page', () => {
  render(<About />);
  expect(screen.getByText("Auto Escola Project", { selector: "h1"})).toBeInTheDocument();
 });
 

// test("Scroolls to top in first render", () => {
//   render(<About />);
//   expect(window.scrollTo).toBeCalledTimes(1);
// })




// test('renders About page', () => {
//  render(<About />);

// });

