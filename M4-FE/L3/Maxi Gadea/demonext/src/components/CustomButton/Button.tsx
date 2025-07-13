import React from "react";

export interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, disabled }) => {
  return (
    <div>
      <button disabled={disabled}>{children}</button>
    </div>
  );
};

export default Button;
