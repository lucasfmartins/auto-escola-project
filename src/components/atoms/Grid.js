import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { BreakAt, BreakpointSizes } from "styles/Breakpoints";

//encapsulando a regra, para não repetir codigo
const breakColumnAt = (size) => (props) =>
props[size] &&
css`
  ${BreakAt(BreakpointSizes[size])} {
    grid-template-columns: repeat(${(props) => props[size]}, 1fr);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px; //espacamento entre colunas
  grid-row-gap: 16px; //espacamento entre linhas
  grid-template-columns: 1fr;
  /* grid-template-columns: repeat(4, 1fr) //Define 4 colunas com 1frame de espacamento */
  /* ou grid-template-columns: 1fr 1fr 1fr 1fr;  //definir a coluna, 4 colunas com 1frame de espacamento */

  ${breakColumnAt("sm")}
  ${breakColumnAt("md")}
  ${breakColumnAt("lg")}
  ${breakColumnAt("xl")}


`;

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default Grid;
