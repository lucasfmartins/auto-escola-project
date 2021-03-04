//controlar o estado dos componentes filho

import React, { useState } from "react";
import PropTypes from "prop-types";

//accordions estão no children
//precisamos fazer um loop pois esse children é um array de objetos
const AccordionGroup = ({ children }) => {
  //-1 todos os items fechados
  const [index, setIndex] = useState(-1);
  //para fazer um map no children, com um callback de child, um item de children
  //clonando child e então alterando seu estado
  return React.Children.map(children, (child, childIndex) =>
    React.cloneElement(child, {
      open: childIndex === index,
      onChange: () => {
        if (childIndex === index) {
          setIndex(-1);
        } else {
          setIndex(childIndex);
        }
      },
    })
  );
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};

export default AccordionGroup;
