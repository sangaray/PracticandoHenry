import { Container } from "postcss";
import React, { createContext } from "react";

const ThemeContext = createContext({});

const ContextComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeContext.Provider value="Dark">{children}</ThemeContext.Provider>
    </div>
  );
};

export default ContextComponent;
