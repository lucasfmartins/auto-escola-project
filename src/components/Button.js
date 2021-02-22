import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

//#Com styled components, não precisamos definir type e chieldren, por serem 1/1
// const Button = ({type, children}) => (
//   <button type={type}>
//     {children}
//   </button>
// );

const getPrimaryColor = (props) => props.theme.colors.primary.main;
const getPrimaryText = (props) => props.thme.colors.primary.text;

const Button = styled.button`
  font-size:  1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getPrimaryColor};
  border: 2px solid ${getPrimaryColor};
  color: ${getPrimaryText};
`;

Button.defaultProps = {
  type: "button",
  children: undefined,
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
}

export default Button;
