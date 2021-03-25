import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";

test('renders Product Detail page', () => {
 render(<ProductDetail />);
});

// test('renders Product Detail page', () => {
//   render(<ProductDetail />);
//   expect(screen.getByText('Nome do Serviço')).toBeInTheDocument();
//  });
 
