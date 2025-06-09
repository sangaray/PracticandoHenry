// Type Annotations
var a = 1;
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
}());
// GENERICs
var arrNumbers = [1, 2, 3, 4, 5, 6];
var arrStrings = ["Hola", "Chau"];
var arrAnys = ["Hola", 1, false, {}];
var getLastNumber = function (arrayNumbers) {
    return arrayNumbers.pop();
};
var getLastString = function (arrayStrings) {
    return arrayStrings.pop();
};
var getLastAny = function (arrayAnys) { return arrayAnys.pop(); };
console.log(getLastNumber(arrNumbers));
console.log(getLastString(arrStrings));
console.log(getLastAny(arrAnys));
