import Card from "@/components/Card/Card";
import productsToPreLoad from "@/helpers/products";
import React from "react";
import { getProductsService } from "../../../../back/src/services/products.service";

const HomeView = () => {
  const products = productsToPreLoad;
  return (
    <div>
      <h1>Home</h1>
      {products &&
        products?.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
    </div>
  );
};

export default HomeView;
