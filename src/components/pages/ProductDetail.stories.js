import React from "react";

import ProductDetail from "./ProductDetail";
import { buildProduct } from "models/builders/products.js";

export default {
  title: "Components/Pages/ProductDetail",
  component: ProductDetail,
};

export const usage = () => <ProductDetail product={buildProduct()} />;
