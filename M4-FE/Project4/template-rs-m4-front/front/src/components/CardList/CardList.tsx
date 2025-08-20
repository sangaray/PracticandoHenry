import React from "react";

import Card from "@/components/Card/Card";
import { getProductsDB } from "@/helpers/productsHelper";

const CardList = async () => {
  const products = await getProductsDB();
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
