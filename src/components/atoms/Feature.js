import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const getPrimaryColor = ({theme}) => theme.colors.primary.main;
//snipet styc
const Root = styled.div`
  text-align: center;

  & h5 {
    margin: 16px 0;
  }
  & p {
    margin: 0;
  }
`;

const IconRoot = styled.div`
  //alinhar no centro
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getPrimaryColor};

    > * {
      color: #fff;
      background-color: ${getPrimaryColor};
    }
  }
`;


const IconContainer = styled.div`
  //alinhar icone
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #e9e9e9;
  border-radius: 50%;
  font-size: 32px;
  width: 100%;
  height: 100%;
  color: ${getPrimaryColor};
`;

const H5 = styled.h5``;

const Feature = ({ icon, title, children }) => (
  <Root>
    <IconRoot>
      <IconContainer>{icon}</IconContainer>
    </IconRoot>
    <h5>{title}</h5>
    <div>{children}</div>
  </Root>
);

Feature.defaultProps = {
  icon: undefined, //opcional
  title: "",
  children: undefined, //opcional
};

Feature.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Feature;
