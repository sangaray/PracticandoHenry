const sumar = require("../index");

/* describe("Una prueba de tests que pasan siempre", () => {
  test("Este test debe pasar siempre", () => {
    expect(true).toBe(true);
  });
}); */

describe("La función 'sumar'", () => {
  it("Debe retornar null si es ejecutada con algún valor no numérico como argumento", () => {
    expect(sumar(1, true)).toBe(null);
    expect(sumar(false, 10)).toBe(null);
    expect(sumar("hola", "chau")).toBe(null);
  });

  it("Debe retornar correctamente el resultado de la suma", () => {
    expect(sumar(10, 15)).toBe(25);
    expect(sumar(0, 0)).toBe(0);
    expect(sumar(-8, 8)).toBe(0);
    expect(sumar(-20, -30)).toBe(-50);
  });
});
