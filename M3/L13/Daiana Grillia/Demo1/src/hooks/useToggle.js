import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};
