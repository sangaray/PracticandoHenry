const { calcularTotal } = require("../index");
const mockGetItems = jest.fn(() => {
  return [
    { name: "Producto A", price: 10, quantity: 2 },
    { name: "Producto B", price: 5, quantity: 3 },
  ];
});
// Quiero asegurarme que cuando calcularTotal se ejecuta al callback se ejecute.

describe("En la función calcularTotal", () => {
  it("La función 'getItems' que paso como parámetro debe ejecutarse al menos una vez", () => {
    calcularTotal(mockGetItems);
    expect(mockGetItems).toHaveBeenCalled();
  });
});
