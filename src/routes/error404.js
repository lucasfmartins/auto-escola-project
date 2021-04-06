import React from "react";


import Error from "components/pages/Error"
import ImageTaken from "draws/Taken"

const error404 = () => (
  <Error 
  image={<ImageTaken />}
  title="Página não encontrada"
  description="Ops! Essa página foi abduzida"
/>
);


export default error404;
