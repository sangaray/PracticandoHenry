import React from "react";

const Detail: React.FC<{ params: { productID: string } }> = ({ params }) => {
  console.log(params.productID);
  return <div>Este es el detalle del producto: {params.productID} </div>;
};

export default Detail;
