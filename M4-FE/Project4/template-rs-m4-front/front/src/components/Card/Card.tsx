import React from "react";
import { ICardProps } from "./types";

const Card: React.FC<ICardProps> = ({
  name,
  description,
  price,
  stock,
  image,
}) => {
  return (
    <div>
      <img src={image} alt="imagen del producto" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price:Price ${price}</p>
        <p>Stock:Stock: {stock}</p>
      </div>
    </div>
  );
};

export default Card;
