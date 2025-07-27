import React from "react";

export const CardWithTailwind = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mt-4">
      <img
        className="w-full"
        src="https://placehold.co/300"
        alt="Placeholder"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">title</div>
        <p className="text-gray-700 text-base mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          inventore quasi dolorem doloribus aspernatur, natus corporis iusto
          tenetur sapiente nostrum! Harum sapiente laudantium dicta neque
          repudiandae ex ratione praesentium ducimus.
        </p>
      </div>

      <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #tag3
        </span>
      </div>
    </div>
  );
};

export default CardWithTailwind;
