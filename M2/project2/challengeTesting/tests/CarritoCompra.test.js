// Para crear los tests hay que crear las instancias necesarias para que los métodos funciones en base a sus constructores

const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  const producto = new CarritoCompra();

  it("Debe ser una clase", () => {
    expect(typeof CarritoCompra.prototype.constructor).toBe("function");
  });

  it("Debe tener inplementado el método agregarProducto", () => {
    expect(producto.agregarProducto).toBeDefined();
  });

  it("Debe tener inplementado el método calcularTotal", () => {
    expect(producto.calcularTotal).toBeDefined();
  });

  it("Debe tener inplementado el método aplicarDescuento", () => {
    expect(producto.aplicarDescuento).toBeDefined();
  });

  it("Debe inicializar el carrito como un array vacío", () => {
    expect(carrito.productos).toEqual([]);
  });

  it("Debe agregar un producto al carrito", () => {
    const producto = { nombre: "Producto A", cantidad: 2, precio: 50 };
    carrito.agregarProducto(producto);
    expect(carrito.productos.length).toBe(1);
    expect(carrito.productos[0]).toEqual(producto);
  });

  it("Debe calcular el total de la compra correctamente", () => {
    const productoA = { nombre: "Producto A", cantidad: 2, precio: 50 }; // 100
    const productoB = { nombre: "Producto B", cantidad: 1, precio: 150 }; // 150
    carrito.agregarProducto(productoA);
    carrito.agregarProducto(productoB);
    expect(carrito.calcularTotal()).toBe(250);
  });

  it("Debe aplicar correctamente un descuento", () => {
    const producto = { nombre: "Producto A", cantidad: 2, precio: 100 }; // 200
    carrito.agregarProducto(producto);
    carrito.aplicarDescuento(0.1); // 10% de descuento
    expect(carrito.calcularTotal()).toBe(180); // 200 - 20
  });

  it("Debe manejar un carrito vacío sin errores", () => {
    expect(carrito.calcularTotal()).toBe(0);
  });

  it("Debe calcular correctamente con un descuento de 0%", () => {
    const producto = { nombre: "Producto A", cantidad: 1, precio: 100 };
    carrito.agregarProducto(producto);
    carrito.aplicarDescuento(0); // sin descuento
    expect(carrito.calcularTotal()).toBe(100);
  });
});
