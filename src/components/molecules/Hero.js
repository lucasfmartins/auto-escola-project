import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Container from "components/atoms/Container";
import { BreakAt, BreakpointSizes } from "styles/Breakpoints";

const colorYellow = "#ffc107";
const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  
  //para a linha ir até onde o conteudo vai
  display: inline-block;
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${(props) => props.theme.colors.primary.main};
    }
  }

  ${BreakAt(BreakpointSizes.xl)}{
    margin-left: 60px; 
  }
`;

//children permite composição de componentes,
const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  /**
   *Background
   */
  image: PropTypes.string,
  children: PropTypes.node,
};

// Hero.defaultProps = {
//   title: "Meu título",
// }

export default Hero;

//children para compor os componentes

{
  /* <ul>
<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
<button>Matricule-se agora</button>
</ul> */
}
