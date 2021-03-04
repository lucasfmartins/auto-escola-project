import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
      quas necessitatibus accusamus maxime, molestiae, vel aut explicabo harum
      tempora quaerat sed in natus nostrum? Voluptates fuga sit cum facilis.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
      quas necessitatibus accusamus maxime, molestiae, vel aut explicabo harum
      tempora quaerat sed in natus nostrum? Voluptates fuga sit cum facilis.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
      quas necessitatibus accusamus maxime, molestiae, vel aut explicabo harum
      tempora quaerat sed in natus nostrum? Voluptates fuga sit cum facilis.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
      quas necessitatibus accusamus maxime, molestiae, vel aut explicabo harum
      tempora quaerat sed in natus nostrum? Voluptates fuga sit cum facilis.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
      quas necessitatibus accusamus maxime, molestiae, vel aut explicabo harum
      tempora quaerat sed in natus nostrum? Voluptates fuga sit cum facilis.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius maiores
      quas necessitatibus accusamus maxime, molestiae, vel aut explicabo harum
      tempora quaerat sed in natus nostrum? Voluptates fuga sit cum facilis.
    </Accordion>
  </AccordionGroup>
);
