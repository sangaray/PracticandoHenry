import React from "react";
import { FancyButton } from "./fancy-button";
import { useToggle } from "./use-toggle";

export function Toggle({ children }: { children: React.ReactNode }) {
  const [toggled, setToggle] = useToggle(false);
  return (
    <FancyButton onClick={setToggle as () => void}>{children}</FancyButton>
  );
}
