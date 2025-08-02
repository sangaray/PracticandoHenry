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
    <div className="flex flex-row items-center rounded-lg gap-2 justify-center border p-2 w-[360px] h-[200px] hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
      <img
        className="max-w-[120px] w-full h-auto"
        src={image}
        alt="imagen del producto"
      />
      <div className="flex flex-col w-full h-full items-center justify-center gap-2">
        <h2 className="font-semibold test-xs">{name}</h2>
        <p className="text-xs">Price:Price ${price}</p>
        <p className="text-xs">Stock:Stock: {stock}</p>
      </div>
    </div>
  );
};

export default Card;
