import React from "react";

import { buildProductList } from "models/builders/products.js";
import ProductGrid from "./ProductGrid";


export default {
  title: "Components/Organism/ProductGrid",
  component: ProductGrid,
};

export const usage = () => <ProductGrid products={buildProductList(6)} />;
