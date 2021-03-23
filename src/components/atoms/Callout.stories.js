import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed1";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi,
        pariatur doloribus, ratione laboriosam architecto omnis ipsum mollitia
        non voluptatum soluta voluptatem beatae illum, quibusdam cupiditate
        itaque. Nam, fugit adipisci!
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
