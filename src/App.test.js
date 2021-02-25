import { render, screen } from "@testing-library/react";
import App from "./App";

//verifica se o link(nesse caso botão) existe no documento
test("renders call to action", () => {
  render(<App />);
  const linkElement = screen.getByText(/matricule-se agora/i); //i para usar case sensitive
  expect(linkElement).toBeInTheDocument();
});
