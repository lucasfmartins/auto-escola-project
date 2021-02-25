
import PropTypes from "prop-types";
import styled from "styled-components";

import {BreakAt, BreakpointSizes} from "styles/Breakpoints";

const Container = styled.div`
  /* background-color: red; */
  //menor tela, fica definido
  width: 100%;
  padding: 0 8px;

  // cria media querry para maior tela
  /* @media (min-width: 768){
    max-width: 1140px;
    margin: 0 16px; //em cima e embaix sem margem, e automatico dos lados
  } */
  ${BreakAt(BreakpointSizes.sm)}{
    padding:0 16px;
  }

  // cria media querry para tela ainda maior
  ${BreakAt(BreakpointSizes.lg)}{
    max-width: 1140px;
    margin: 0 auto; //em cima e embaix sem margem, e automatico dos lados
    padding: 0;
  }
  
`;

Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
