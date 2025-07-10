import React from "react";

// types
import ICardProps from "./types";

const Card: React.FC<ICardProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
