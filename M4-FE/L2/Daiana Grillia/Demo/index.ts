// Trabajando con variables
let a: number = 2;

a = 4;

console.log(a);

// Trabajando con funciones
const addition = (a: number, b: number): number => a + b;

console.log(addition(2, 3));

// Trabajando con interfaces
export interface Product {
  title: string;
  description: string;
  price: number;
  images: Array<string>;
  active: boolean;
}

// Trabajando con objetos
const newProduct: Product = {
  title: "Producto Nuevo",
  description: "Es un producto muy bueno",
  price: 200,
  images: [],
  active: true,
};

console.log(newProduct);

// Declarando arrays
const aarregloGenericos: Array<number> = [1, 2, 3, 4];
const arregloConvencional: number[] = [5, 6, 7, 8];

class ProductMemoryRepository {
  private products: Array<Product>;

  constructor(products: Array<Product>) {
    // <- Aquí faltaba el cuerpo del constructor
    this.products = products;
  }

  public getProducts(): Array<Product> {
    return this.products;
  }
}

// Trabajando con Genéricos

const getLastItem = <T>(items: T[]): T => {
  return items[items.length - 1];
};

console.log(getLastItem([1, 2, 3, 4, 5]));
console.log(getLastItem(["a", "b", "c", "d", "e"]));
console.log(getLastItem([[], {}, 2, 4, "e"]));

const reult1 = getLastItem<number>([1, 2, 3, 4, 5]);
const reult2 = getLastItem<string>(["a", "b", "c", "d", "e"]);
const reult3 = getLastItem<string>([[], {}, 2, 4, "e"]);

console.log(reult1);
console.log(reult2);
console.log(reult3);
