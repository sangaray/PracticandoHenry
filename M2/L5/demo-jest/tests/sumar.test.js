const sumar = require("../index");

const mockSumar = jest.fn(sumar);

/* describe("Una prueba de tests que pasan siempre", () => {
  test("Este test debe pasar siempre", () => {
    expect(true).toBe(true);
  });
}); */

describe("La función 'sumar'", () => {
  it("Debe retornar null si es ejecutada con algún valor no numérico como argumento", () => {
    expect(mockSumar(1, true)).toBe(null);
    expect(mockSumar(false, 10)).toBe(null);
    expect(mockSumar("hola", "chau")).toBe(null);
    // console.log(mockSumar.mock);
  });

  it("Debe retornar correctamente el resultado de la suma", () => {
    expect(mockSumar(10, 15)).toBe(25);
    expect(mockSumar(0, 0)).toBe(0);
    expect(mockSumar(-8, 8)).toBe(0);
    expect(mockSumar(-20, -30)).toBe(-50);
    // console.log(mockSumar.mock);
  });

  it("Debe haber registrao correctamente los argumentos 10 y 15", () => {
    expect(mockSumar).toHaveBeenCalledWith(10, 15);
  });
});
