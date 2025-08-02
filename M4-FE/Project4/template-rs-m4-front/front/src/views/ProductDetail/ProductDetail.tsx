import React from "react";

const ProductDetail = () => {
  return (
    <div className="flex flex-col items-center rounded-lg gap-2 justify-center border p-2 w-[360px] h-[200px] hover:shadow-xl">
      <img
        className="max-w-[120px] w-full h-auto"
        src="https://res.cloudinary.com/dqdrtbtuv/image/upload/v1749073485/HenryProjects/Project4/IPhone11-removebg-preview_zvz2e5.png"
        alt="Iphone 14 PRO"
      />
      <div className="flex flex-col w-full h-full items-center justify-center gap-2">
        <h2 className="font-semibold test-xs">Iphone 14 PRO</h2>
        <p className="font-semibold test-xs">
          Experience power and elegance with the iPhone 11: capture stunning
          moments with its dual-camera system, enjoy exceptional performance,
          and immerse yourself in a brilliant Liquid Retina display. Discover a
          world of possibilities in the palm of your hand!
        </p>
        <p className="font-semibold test-xs">
          Este es el mejor producto, y esta sería la descripción
        </p>
        <p className="font-semibold test-xs">Precio: $699</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
