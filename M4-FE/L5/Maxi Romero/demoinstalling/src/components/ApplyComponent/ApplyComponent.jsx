import React from "react";

const ApplyComponent = () => {
  return (
    <div>
      {/* BEFORE APPLAY */}

      <div className="mt-3 flex -space-x-2 overflow-hidden">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746566551/FSWebDeveloper/Edinburgh_skyline_e4howb.png"
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746565930/FSWebDeveloper/Kilchurn_Castle_vgx4pu.png"
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746565930/FSWebDeveloper/Inveraray_Castle_mqiqin.png"
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746566057/sample.jpg"
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672149162/cld-sample-2.jpg"
        />
      </div>

      {/* AFTER APPLY */}
      <div className="mt-3 flex -space-x-2 overflow-hidden">
        <img
          className="image-container"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746566551/FSWebDeveloper/Edinburgh_skyline_e4howb.png"
        />
        <img
          className="image-container"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746565930/FSWebDeveloper/Kilchurn_Castle_vgx4pu.png"
        />
        <img
          className="image-container"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746565930/FSWebDeveloper/Inveraray_Castle_mqiqin.png"
        />
        <img
          className="image-container"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1746566057/sample.jpg"
        />
        <img
          className="image-container"
          src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1672149162/cld-sample-2.jpg"
        />
      </div>
    </div>
  );
};

export default ApplyComponent;
