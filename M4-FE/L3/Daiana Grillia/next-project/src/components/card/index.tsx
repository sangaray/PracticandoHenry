import React from "react";

// types
import { ICardProps } from "./types";

export const Card: React.FC<ICardProps> = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {/* o description ?{" "} <p>{description}</p> : null */}
    </div>
  );
};

export default Card;
