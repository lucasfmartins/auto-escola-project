import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Container from "components/atoms/Container";
import { BreakAt, BreakpointSizes} from "styles/Breakpoints";

const Content = styled.div`
  padding: 40px 0;
  ${(props) =>
    props.inverse &&
    css`
      background-color: #f7f7f7;
    `}

    ${BreakAt(BreakpointSizes.md)}{
      padding: 80px 0;
    }

  h2 {
    margin-top: 0;
  }
`;
const Section = ({ children, inverse }) => (
  <Content inverse={inverse}>
    <Container>{children}</Container>
  </Content>
);

Section.defaultProps = {
  children: undefined,
  inverse: false, //inverter a cor
};

Section.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool,
};

export default Section;
