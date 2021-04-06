import React from "react";
import { useParams } from "react-router-dom";


import Error from "components/pages/Error";
import ProductDetailPage from "components/pages/ProductDetail";
import NotFoundImage from "draws/Error";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";

const ProductDetail = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
      image={<NotFoundImage />}
        title="Serviço não encontrado"
        description="Serviço não encontrado ou não disponível"
      />
    );
  }

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
