import React from "react";
import productsToPreLoad from "@/helpers/products";
import Card from "@/components/Card/Card";

const CardList = () => {
  const products = productsToPreLoad;
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      {products &&
        products?.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
    </div>
  );
};

export default CardList;
