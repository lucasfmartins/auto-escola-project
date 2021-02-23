import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgHighWayImage from "../stories/assets/highway.jpg";
import BgCarImage from "../stories/assets/car.jpg";
import Heading from "./Heading";
import Button from "./Button";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighWayImage}>
    <h1> {text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p> {text("Text", "A autoescola lider em aprovação")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    </ul>
    <Button color="primary" variant="outlined">
      Matricule-se agora
    </Button>
  </Hero>
);

// ou usar () => return {}
