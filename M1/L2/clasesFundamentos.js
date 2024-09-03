// Encapsulamiento

class CajaFuerte {
	constructor() {
		this._dinero = 0; // detalle interno, oculto
	}

	depositar(cantidad) {
		this._dinero += cantidad;
	}

	retirar(cantidad) {
		if (cantidad <= this._dinero) {
			this._dinero -= cantidad;
			return cantidad;
		}
		return 0;
	}
}

const monto = new CajaFuerte();

monto.depositar(1500);

monto.retirar(200);

console.log(monto);

// Herencia

class Padre {
	caminar() {
		console.log("Caminando...");
	}
}

class Hijo extends Padre {
	// Hijo hereda la capacidad de caminar del padre
}

let hijo = new Hijo();

hijo.caminar(); // Muestra "Caminando..."

console.log(hijo);

// Polimorfismo
class Forma {
	dibujar() {
		console.log("Dibujando una forma genérica");
	}
}

class Circulo extends Forma {
	dibujar() {
		console.log("Dibujando un círculo");
	}
}

class Cuadrado extends Forma {
	dibujar() {
		console.log("Dibujando un cuadrado");
	}
}

const circulo = new Circulo();
circulo.dibujar();

console.log(circulo);

const cuadrado = new Cuadrado();
cuadrado.dibujar();

console.log(cuadrado);

const dibujo = new Forma();
dibujo.dibujar();

console.log(dibujo);

// Abstracción
class Coche {
	constructor() {
		this._motorEncendido = false; // Propiedad privada
	}

	_encenderMotor() {
		// Método privado. Detalle interno sobre como se enciende el motor
		this._motorEncendido = true;
		console.log("Motor encendido");
	}

	_apagarMotor() {
		this._motorEncendido = false;
		console.log("Motor apagado");
	}
}

const miCoche = new Coche();
miCoche._encenderMotor();

console.log(miCoche);

const miCoche1 = new Coche();
miCoche._apagarMotor();

console.log(miCoche);
