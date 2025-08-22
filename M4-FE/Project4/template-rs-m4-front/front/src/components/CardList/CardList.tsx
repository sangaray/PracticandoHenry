import React from "react";

import Card from "@/components/Card/Card";
import { getProductsDB } from "@/helpers/productsHelper";
import Link from "next/link";

const CardList = async () => {
  const products = await getProductsDB();
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      {products &&
        products?.map((product) => {
          return (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card {...product} />
            </Link>
          );
        })}
    </div>
  );
};

export default CardList;
