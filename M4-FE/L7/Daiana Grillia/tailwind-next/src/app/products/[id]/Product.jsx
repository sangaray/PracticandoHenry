import React from "react";
import { ProductDetail } from "@/components/product-detail/ProductDetail";

export const fetchProductDetail = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-cache",
  });
  const product = await response.json();
  return product;
};

export const Product = async ({ params }) => {
  const { id, title, price, description, image } = await fetchProductDetail(
    params.id
  );
  return (
    <ProductDetail
      id={id}
      title={title}
      price={price}
      description={description}
      image={image}
    />
  );
};

export default Product;
