import React from 'react';
import { text } from "@storybook/addon-knobs";

import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading
}

//função que retorna o proprio componente
//criando nossa historia

export const usage = () => (
  <div>
    <Heading><h1>{text("Título 1","Título 1")}</h1></Heading>

    <Heading><h2>{text("Título 2","Título 2")}</h2></Heading>

    <Heading><h3>{text("Título 3","Título 3")}</h3></Heading>

    <Heading><h4>{text("Título 4","Título 4")}</h4></Heading>

    <Heading><h5>{text("Título 5","Título 5")}</h5></Heading>

    <Heading><h6>{text("Título 6","Título 6")}</h6></Heading>

  </div>
  

);
