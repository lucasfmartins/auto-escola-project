import React from "react";
import { render, fireEvent } from "./test-utils";

import Button, { ButtonColors, ButtonVariants } from "./Button";

//Clean Code, primeiro cria a massa de test, depois submete sua função e por ultimo valida a função

test("renders a text", () => {
  const { getByText } = render(<Button>Click Here</Button>);

  expect(getByText("Click Here")).toBeInTheDocument();
});

test("trigger event on click", () => {
  const handleClick = jest.fn(); //mock

  const { getByRole } = render(<Button onClick={handleClick} />);

  fireEvent.click(getByRole("button")); //simula o click no botão

  expect(handleClick).toBeCalled(); //espera que tenha sido chamado
});

test.each([["default"], ["primary"], ["danger"]])(
  "renders with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test.each([["default"], ["primary"], ["danger"]])(
  "renders with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color} />);

    expect(asFragment()).toMatchSnapshot();
  }
);
//Ou, para não quebrar quando alterar as cores
test.each(Object.values(ButtonColors).map((item) => [item]))(
  "renders dinamic object with color %s",
  (color) => {
    const { asFragment } = render(<Button color={color} />);

    expect(asFragment()).toMatchSnapshot();
  }
);


test.each(Object.values(ButtonVariants).map((item) => [item]))(
  "renders dinamic object with variant %s",
  (variant) => {
    const { asFragment } = render(<Button variant={variant} />);

    expect(asFragment()).toMatchSnapshot();
  }
);


test("render with color primary and variant outlined", () => {
  const { asFragment } = render(<Button variant="outlined" color="primary" />);

  expect(asFragment()).toMatchSnapshot();
});


test("render with color primary and variant link", () => {
  const { asFragment } = render(<Button variant="link" color="primary" />);

  expect(asFragment()).toMatchSnapshot();
});
