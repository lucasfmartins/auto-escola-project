import React from 'react';
import { render } from "@testing-library/react";


import Heading from "./Heading";

test("match snapshot", () => {
  const { asFragment } = render (<Heading>Title</Heading>);

  expect(asFragment()).toMatchSnapshot();
});


//também pode usar container, a diferença é que coloca nosso elemento dentro de uma div
// test("match snapshot", () => {
//   const { container } = render (<Heading>Title</Heading>);

//   expect(container).toMatchSnapshot();
// });
//asFragment, para renderizar o nosso component dentro do fragment
