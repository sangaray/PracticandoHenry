import React, { useState } from "react";

export default function useToggle(initialState = false) {
  const [value, setValue] = useState(initialState);
  const toggle = () => setValue(!value);

  return [value, toggle];
}
