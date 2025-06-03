import React from "react";

interface ProductProps {
  title: string;
  description: string;
  price: number;
  images?: string[];
  active?: boolean;
}

const Product: React.FC<ProductProps> = ({ title, description, price }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </>
  );
};

export default Product;
