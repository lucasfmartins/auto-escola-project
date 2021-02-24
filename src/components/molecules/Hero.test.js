import React from 'react';
import { render } from "test-utils";

import Hero from "./Hero";



test('renders Hero with children', () => {

  //espreed operator
  const {getByText} = render (
    <Hero>
      <p>Lucas Martins</p>
    </Hero>
  );

  expect(getByText("Lucas Martins")).toBeInTheDocument(); //assegura que realmente foi renderizado, não nativo do jest, e sim do jest-dom
});

test("renders image background", () => {

  const image = "htt´://test/image.jpg";
  const { getByTestId } =  render(
    <Hero image = {image} />
  );

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});


// test('renders Hero with children', () => {

//   const {getByText} = render (
//     <Hero>
//       <p>Lucas Martins</p>
//     </Hero>
//   );

//   expect(getByText("Lucas Martins")).toBeTruthy();  tobetruthy não  é a melhor forma de verificar se o elemento está no DOM
// });


// test('renders Hero with children', () => {

//   const component = render (
//     <Hero>
//       <p>Lucas Martins</p>
//     </Hero>
//   );

//   component.debug();

//   expect(component.getByText("Lucas Martins")).toBeTruthy();
// });
