import ProductDetail from "@/views/ProductDetail/ProductDetail";
import React from "react";

const Detail: React.FC<{ params: { productID: string } }> = ({ params }) => {
  console.log(params.productID);
  return (
    <div>
      <ProductDetail />
    </div>
  );
};

export default Detail;
