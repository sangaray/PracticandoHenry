/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // purge no es necesario en las nuevas versiones de Tailwind CSS, ya que se maneja automáticamente, viene incluido en content. En veriones anteriores a la 3.0, se debía agregar a este archivo
  // purga: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#808080",
      },
      margin: {
        "margin-1": "20px",
      },
    },
  },
  plugins: [],
};

