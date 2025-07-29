import React from "react";
import "./image.css";

export const component = () => {
  return (
    <div className="mt-3 flex -space-x-2 overflow-hidden">
      <img
        className="img-adapter"
        src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746566551/FSWebDeveloper/Edinburgh_skyline_e4howb.png"
      />
      <img
        className="img-adapter"
        src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746565930/FSWebDeveloper/Kilchurn_Castle_vgx4pu.png"
      />
      <img
        className="img-adapter"
        src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746565930/FSWebDeveloper/Inveraray_Castle_mqiqin.png"
      />
      <img
        className="img-adapter"
        src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746566057/sample.jpg"
      />
      <img
        className="img-adapter"
        src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672149162/cld-sample-2.jpg"
      />
    </div>
  );
};

export default component;
