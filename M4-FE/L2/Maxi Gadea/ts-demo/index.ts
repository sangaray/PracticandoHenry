// Type Annotationet a: number = 1;
let c: string = "Maximiliano";
let b: boolean = true;
let k: any = [2, 3, false];

const addition = (a: number, b: number): number => {
  return a + b;
};

// interfaces
interface IProduct {
  title: string;
  price: number;
  description?: string;
  image: string | undefined;
}

// Types
type TProducto = {
  title: string;
  price: number;
  description?: string;
  image: string | undefined;
};

let productos: Array<IProduct>; // Genérico
let productosTradicional: TProducto[]; // Tradicional

// Objeto basado en la Interface
const productExample: IProduct = {
  title: "Producto 1",
  price: 100,
  image: "https://example.com",
};

// Clases
class ProductoMemoryRepository {
  private _products: IProduct[];

  constructor(products: IProduct[]) {
    this._products = products;
  }

  public getProdudcts() {
    return this._products;
  }
}

// GENERICs
const arrNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
const arrStrings: string[] = ["Hola", "Chau"];
const arrAnys: Array<any> = ["Hola", 1, false, {}];

// const getLastNumber = (arrayNumbers: number[]): number | undefined =>
//   arrayNumbers.pop();
// const getLastString = (arrayStrings: string[]): string | undefined =>
//   arrayStrings.pop();
// const getLastAny = (arrayAnys: any[]): any | undefined => arrayAnys.pop();

// console.log(getLastNumber(arrNumbers));
// console.log(getLastString(arrStrings));
// console.log(getLastAny(arrAnys));

const getLastItem = <Type>(arrayGenerico: Array<Type>): Type | undefined =>
  arrayGenerico.pop();

console.log(getLastItem<number>(arrNumbers));
console.log(getLastItem<string>(arrStrings));
console.log(getLastItem(arrAnys));
