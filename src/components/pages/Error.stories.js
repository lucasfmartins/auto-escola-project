import React from "react";

import Error from "./Error";
import ImageTaken from "draws/Taken"

export default {
  title: "Components/Pages/Error",
  component: Error
};

export const usage = () => (
  <Error 
    image={<ImageTaken />}
    title="Página não encontrada"
    description="Ops! Essa página foi abduzida"
  />
);
