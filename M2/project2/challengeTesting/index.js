class CarritoCompra {
  constructor() {
    this.productos = [];
    this.descuento = 0; // Porcentaje de descuento
  }

  agregarProducto({ nombre, cantidad, precio }) {
    const producto = { nombre, cantidad, precio };
    this.productos.push(producto);
  }

  calcularTotal() {
    const totalSinDescuento = this.productos.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    return totalSinDescuento * (1 - this.descuento);
  }

  aplicarDescuento(porcentaje) {
    this.descuento = porcentaje;
  }
}

module.exports = CarritoCompra;
