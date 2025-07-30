import React from "react";

const CardTailwind = () => {
  return (
    <div>
      <p className="text-lg text-[#0000ff]">Grande azul</p>
      <div className="m-4 p-2 bg-[#808080]">Contenido con margen y relleno</div>

      <button className="bg-blue-300 hover:bg-blue-700 hover:w-[200px] focus:bg-red-500">
        Demo Pseudoclases
      </button>

      <div className="w-full bg-yellow-200 md:w-1/2 md:bg-red-200 xl:bg-green-600">
        Soy Responsivo
      </div>
    </div>
  );
};

export default CardTailwind;
