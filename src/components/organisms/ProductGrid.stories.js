import React from "react";

import ProductGrid from "./ProductGrid";
import PlaceHolderImage from "stories/assets/car.jpg";

export default {
  title: "Components/Organism/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: PlaceHolderImage, title: "Titulo 1", sumary: "Texto" },
      { id: 2, image: PlaceHolderImage, title: "Titulo 2", sumary: "Texto" },
      { id: 3, image: PlaceHolderImage, title: "Titulo 3", sumary: "Texto" },
      { id: 4, image: PlaceHolderImage, title: "Titulo 4", sumary: "Texto" },
      { id: 5, image: PlaceHolderImage, title: "Titulo 5", sumary: "Texto" },
      { id: 6, image: PlaceHolderImage, title: "Titulo 6", sumary: "Texto" },
    ]}
  />
);
