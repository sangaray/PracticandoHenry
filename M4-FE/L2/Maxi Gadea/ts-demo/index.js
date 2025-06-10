// Type Annotationet a: number = 1;
var c = "Maximiliano";
var b = true;
var k = [2, 3, false];
var addition = function (a, b) {
  return a + b;
};
var productos; // Genérico
var productosTradicional; // Tradicional
// Objeto basado en la Interface
var productExample = {
  title: "Producto 1",
  price: 100,
  image: "https://example.com",
};
// Clases
var ProductoMemoryRepository = /** @class */ (function () {
  function ProductoMemoryRepository(products) {
    this._products = products;
  }
  ProductoMemoryRepository.prototype.getProdudcts = function () {
    return this._products;
  };
  return ProductoMemoryRepository;
})();
// GENERICs
var arrNumbers = [1, 2, 3, 4, 5, 6];
var arrStrings = ["Hola", "Chau"];
var arrAnys = ["Hola", 1, false, {}];
// const getLastNumber = (arrayNumbers: number[]): number | undefined =>
//   arrayNumbers.pop();
// const getLastString = (arrayStrings: string[]): string | undefined =>
//   arrayStrings.pop();
// const getLastAny = (arrayAnys: any[]): any | undefined => arrayAnys.pop();
// console.log(getLastNumber(arrNumbers));
// console.log(getLastString(arrStrings));
// console.log(getLastAny(arrAnys));
var getLastItem = function (arrayGenerico) {
  return arrayGenerico.pop();
};
console.log(getLastItem(arrNumbers));
console.log(getLastItem(arrStrings));
console.log(getLastItem(arrAnys));
