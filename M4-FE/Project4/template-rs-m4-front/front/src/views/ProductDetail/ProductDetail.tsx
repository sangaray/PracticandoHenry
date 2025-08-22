import { IProduct } from "@/interfaces/types";
import React from "react";

const ProductDetail: React.FC<IProduct> = ({
  name,
  image,
  description,
  price,
  stock,
}) => {
  return (
    <div>
      <img src={image} alt={`imagen del producto ${name}`} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
