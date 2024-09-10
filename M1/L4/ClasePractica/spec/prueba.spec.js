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

describe("Este es mi primer grupo de tests", () => {
	it("El número 2 debe ser igual al número 2", () => {
		expect(2).toEqual(2);
	});
	it("El número 2 debe estar definido", () => {
		expect(2).toBeDefined();
	});
});
