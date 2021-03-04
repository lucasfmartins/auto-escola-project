import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const text = "My children text";
const title = "My title";
test("renders with title", () => {
  render(<Accordion title={title}></Accordion>);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion>{text}</Accordion>);
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

//query retorna null se não encontrar, get retorna exception(usado geralmente quando quer achar algo, pois printa o DOM se tiver erro

test("triggers onChange when it is clicked", async () => {
  //jest.fn() verifica se uma função foi chamada
  const handleChange = jest.fn();
  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  await fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});

//FireEvent para simular um click

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);
      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("triggers onChange when it is clicked", async () => {
      //jest.fn() verifica se uma função foi chamada
      const handleChange = jest.fn();
      render(<Accordion title={title} onChange={handleChange} open />);

      await fireEvent.click(screen.getByText(title));
      expect(handleChange).toBeCalledTimes(1);
    });

    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      );

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    test("call default funtion when it is clicked", async () => {
      //jest.fn() verifica se uma função foi chamada
      render(<Accordion title={title} open />);

      await fireEvent.click(screen.getByText(title));
    });
  });

  describe("when starts closed", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
