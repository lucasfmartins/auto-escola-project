import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#Com styled components, não precisamos definir type e chieldren, por serem 1/1
// const Button = ({type, children}) => (
//   <button type={type}>
//     {children}
//   </button>
// );

//Enum de cor
//export para usar nos tests
export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

export const ButtonVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};

const getColorText = (props) => props.theme.colors.primary.text;

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

const getOutlinedText = (props) => {
  if (props.color === ButtonColors.default) {
    return "#212121";
  }

  return getMainColor(props);
};

const getLinkText = (props) => {
  if (props.color === ButtonColors.default) {
    return "#757575";
  }

  return getMainColor(props);
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`;

//herança
const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

//ja que a versão do storybook não tem suport para syled-components
const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonVariants)),
};

export default ButtonWrapper;
