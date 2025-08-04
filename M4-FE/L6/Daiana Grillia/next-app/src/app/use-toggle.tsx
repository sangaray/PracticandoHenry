import { useState } from "react";

export function useToggle(initialState: boolean) {
  const [toggle, setToggle] = useState(initialState);

  return [toggle, () => setToggle(!toggle)];
}
