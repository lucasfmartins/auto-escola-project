import React from 'react';

import Hero from "../components/Hero";
import BgHighWayImage from "./assets/highway.jpg";
import BgCarImage from "./assets/car.jpg";


export default {
    title: "Hero",
    component: Hero,
};

export const usage = () => (
    <Hero title = "Ganhe sua liberdade para ir e vir" image = {BgHighWayImage}>
        <p>A autoescola lider em aprovaçã</p>
    </Hero>
);

export const withList = () => (

  <Hero title = "Ganhe sua liberdade para ir e vir" image = {BgCarImage}>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
    </ul>  
  </Hero>
);

// ou usar () => return {}
