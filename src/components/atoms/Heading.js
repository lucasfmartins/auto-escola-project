import styled from "styled-components";

import { BreakAt, BreakpointSizes } from "styles/Breakpoints";

const Heading = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: 25px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &::after {
      content: "";
      position: absolute; //abosoluto ao primeiro parente relativo
      left: 0;
      bottom: -3px;
      background-color: ${(props) => props.theme.colors.primary.main};
      height: 5px;
      width: 70px;
    }
  }

  h1 {
    padding-bottom: 25px;
  }

`;

export default Heading;
