// M1-L4 - Testing
// Permite realizar pruebas sin necesidad de cargar datos de prueba manualmente
// Probar determinadas funcionalidades de nuestra aplicación
// Jasmine, librería de testing. Nos brinda una serie de métodos para realizar las pruebas unitarias
// Ventajas de usar testing
// Detección temprana de errores, permite darme cuenta si algo está mál en el código antes que se vuelva difícil encontar ese error
// Facilita el mantenimiento de código, nos permite encontrar fácilmente donde está el error
// Facilidad para implementar cambios, si queremos hacer un cambio que aunqueno cambie el resultado va a cambiar el proceso, me ayuda a asegurarm que no cambia el resultado
// Integración y despliegue continuos (CI/CD), permite a medida que desarrollamos que nuestras funcionalidades pasen las pruebas que verificand que no haya problemas
// Facilita el refactorizado del código, el cambio puede hace cambios en el proceso, también se puede hacer con más facilidad y tranquilidad de que no se afecte el resultado de las funcionalidades
// JASMINE
// Framework de pruebas unitarias
// Provee un entorno de trabajo, es un pequeño taller con un montón de herramientas para realizar un trabajo
// describe(string, callback) grupo de pruebas que voy a realizar, que tienen el mismo objetivo o funcionalidad. String, descripción. Callback, conjunto de test individuales específicos que se van a aplicar a ese grupo
// it(string, callback), dice que voy aevaluar especificamente, indica un test específico. String, descripción del test específico, prueba que va a realizar
// expect(expresión a evaluar).prueba a aplicar(valor de comparación),
// Al hacer las pruebas evaluar sobre casos conocidos, resultados que sabemos que son correctos
// toBe(), indica que un valor dado es o da por resultado otro valor
// toEqual(), realiza una comparación profunda para buscar igualdades
// Cuando trabajamos con objetos o arrays se usa toWqual() en lugar de toBe()
// toBeDefined(), determina si una función o variables está definida

describe("Este es mi primer grupo de tests", () => {
	it("El número 2 debe ser igual al número 2", () => {
		expect(2).toEqual(2);
	});
	it("El número 2 debe estar definido", () => {
		expect(2).toBeDefined();
	});
});

const sumar = (a, b) => a + b;

describe("La función sumar", () => {
	it("Debe estar definida", () => {
		expect(sumar).toBeDefined();
	});

	it("Debe sumar dos números enviados como argumentos", () => {
		expect(sumar(2, 2)).toBe(4);
		expect(sumar(4, 4)).toBe(8);
		expect(sumar(5, 0)).toBe(5);
	});
});

describe("Una prueba con objetos", () => {
	it("Espero que dos números iguales sean iguales", () => {
		expect(5).toBe(5);
		expect(10).toBe(10);
	});

	it("Espero que dos palabras iguales sean iguals", () => {
		expect("Jorge").toBe("Jorge");
		expect("Alejo").toBe("Alejo");
	});

	it("Espero que dos objetos iguales sean iguales", () => {
		expect({ nombre: "Jorge" }).toEqual({ nombre: "Jorge" });
	});

	it("Espero que dos arrays sean iguales", () => {
		expect(["Jorge"]).toEqual(["Jorge"]);
	});
});

// Recibe un array de números y devuelve un array de números pares
// Puede ser que no tenga la función pero que yo sepa las especificaciones
// Debe estar definida
// Debe retornar un array
// Debe retornar un array con los números pares
// y a partir de esas especificaciones, creo primero los tests y luego creo la función para que responda a esos tests
// Este modelo funciona así, teniendo primero los test y luego desarrollar la función, pasando los test una y otra vez hasta que todos se cumplan, esto nos va a asegurar que la función fue bien implementada y que es funcional
const filtrar = (arr) => arr.filter((num) => num % 2 === 0);

describe("La función filtrar", () => {
	it("Debe estar definida", () => {
		expect(filtrar).toBeDefined();
	});

	it("Debe retornar un array", () => {
		expect(Array.isArray(filtrar([1, 2, 3, 4, 5, 6]))).toBe(true);
	});
	it("Debe retornar un array con los números pares", () => {
		expect(filtrar([1, 2, 3, 4])).toEqual([2, 4]);
		expect(filtrar([2, 4, 6])).toEqual([2, 4, 6]);
		expect(filtrar([1, 3, 5, 7, 9])).toEqual([]);
		expect(filtrar([])).toEqual([]);
	});
});
