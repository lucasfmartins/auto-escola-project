import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import {BreakAt, BreakpointSizes} from "styles/Breakpoints";

const colorYellow = "#ffc107";
const Root = styled.div`
    color: #fff;
    padding: 100px 0;
    ${props => css`
        background: url(${props.image}), rgba(0,0,0,0.4);
        background-size: cover;
        background-position: center;
        background-blend-mode: overlay;
        
    `}
`;

const Content = styled.div`
    p,
    li {
        font-size: 20px;
        font-weight: 300;
    }

    ul {
        list-style: none; 
        padding-left: 0;
    }

    li{     
        &::before{
          content: "\\2713\\0020";
          color: ${colorYellow};
        }
    }
`;

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

//children permite composição de componentes, 
const Hero = ({image, children}) => (
    <Root image={image} data-testid = "hero">
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
}

// Hero.defaultProps = {
//   title: "Meu título",
// }

export default Hero;

//children para compor os componentes

{/* <ul>
<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
<button>Matricule-se agora</button>
</ul> */}
