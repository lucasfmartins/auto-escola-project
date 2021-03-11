import React from "react";

import BreadCrump from "./BreadCrump";

export default {
  title: "Components/Atoms/BreadCrump",
  component: BreadCrump,
};

const items = [{ label: "Início", link: "/" }, { label: "Sobre" }];

export const usage = () => <BreadCrump items={items} />;
