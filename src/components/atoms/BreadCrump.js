
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//styc
const Root = styled.div`
  padding: 16px 0;
`;

const Item = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  color: #fff;

  ${(props) =>
    props.to &&
    css`
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.primary.main};
      }
    `}

  &:not(:first-child) {
    &::before {
      content: ">";
      color: ${(props) => props.theme.colors.primary.main};
      padding: 0 16px;
    }
  }
`;

//# !!item.link para retornar um boolean

const BreadCrump = ({ items }) => (
  <Root>
    {items.map((item) => (
      <Item
        key={item.label}
        as={item.link && Link}
        to={item.link}

      >
        {item.label}
      </Item>
    ))}
  </Root>
);

BreadCrump.defaultProps = {
  items: [],
};

//array de objetos
BreadCrump.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default BreadCrump;
