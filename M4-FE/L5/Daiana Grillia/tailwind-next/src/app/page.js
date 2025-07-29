import Component from "./Component.jsx";

export default function Home() {
  return (
    <div className="w-full h-full bg-blue-001 md:w-1/2 md:bg-green-001 lg:w-1/3 lg:bg-yellow-400">
      <h1 className="text-3xl">Probando Tailwind CSS!</h1>
      <Component />
      <button className="btn-primary">Botón</button>
    </div>
  );
}

