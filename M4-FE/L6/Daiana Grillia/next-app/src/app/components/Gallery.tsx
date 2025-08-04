"use client";

import React, { useState } from "react";
import Slider from "./Slider";

export const Gallery: React.FC = () => {
  const [isOpen, serIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => serIsOpen(true)}>View pictures</button>
      {isOpen && <Slider />}
    </div>
  );
};

export default Gallery;
