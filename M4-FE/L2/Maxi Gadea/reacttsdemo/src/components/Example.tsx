import React from "react";
import { IProductProps } from "../types";

// Primera forma de tipar una prop, props: tipo de dato
export const PrimeraForma = (props: any): React.ReactElement => {
  // o React.ReactNode: es cualquier cosa.
  return <div>Example</div>;
};

export const PrimerComponente: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({ name, children }) => {
  return (
    <div>
      Hola, {name} {children}
    </div>
  );
};

// Esta es la mejor forma de tipar una prop, usando una interface
export const SegundoComponente: React.FC<IProductProps> = ({
  name,
  price,
  description,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
};
