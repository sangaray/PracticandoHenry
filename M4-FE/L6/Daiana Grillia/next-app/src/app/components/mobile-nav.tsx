import React from "react";
import { Toggle } from "./toggle";

export function MobileNav() {
  const children = <button>Menu</button>;
  return Toggle({
    children,
  });
}
