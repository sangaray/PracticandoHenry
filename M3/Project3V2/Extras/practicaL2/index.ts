// EJERCICIO 1
// Tipar la siguiente función
const calcualaArea = (lado1: number, lado2: number): number => lado1 * lado2;
console.log(calcualaArea(5, 6));

// EJERCICIO 2
// Tipar la siguiente función que puede recibir 1, 2 o 3 argumentos
// parámetro? indica opcional
// variable: tipo = valorPorDefecto indica un valor por defecto
// Si la función no retorna nada se tipa como void, estaría retornando undefinde, void = undefined
const presentarUsuario = (
  nombre: string,
  apellido?: string,
  edad: string = "No especificada"
): void => {
  if (!apellido) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
  } else {
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}`);
  }
};
presentarUsuario("Homero");
// Retorno esperado: Nombre: Homero, Edad: No especificada
presentarUsuario("Marge", "Bubbie");
// Retorno esperado: Nombre: Marge, Apellido: Bubbie, Edad: No especificada
presentarUsuario("Lisa", "Simpson", "8");
// Retorno esperado: Nombre: Lisa, Apellido: Simpson, Edad: 8

// EJERCICIO 3
// Generar el Tipo Personalizado "TPersonaje"
type TPersonaje = {
  nombre: string;
  edad: number;
};

// Extenderlo para "TEmpleado"
// extends para interfaces
// \& para tipos personalizados
// También podemos pasarle valores estrictos
type TEmpleado = TPersonaje & {
  puesto: string;
  empleadoDelMes: boolean;
};

const marge: TPersonaje = {
  nombre: "Marge",
  edad: 40,
};

console.log(marge);

const homero: TEmpleado = {
  nombre: "Homero",
  edad: 37,
  puesto: "Jefe de Seguridad",
  empleadoDelMes: true,
};
console.log(homero);

// EJERCICIO 4
// Generar la interface "TProducto"
interface TProducto {
  nombre: string;
  precio: number;
}

// Extenderla para "IProductoElectronico" e "IProductoRopa"
interface IProductoElectronico extends TProducto {
  marca: string;
  modelo: string;
}
interface IProductoRopa extends TProducto {
  talla: string;
  color: string;
}

const celularCODIGO: IProductoElectronico = {
  nombre: "Smartphone",
  precio: 500,
  marca: "Samsung",
  modelo: "Galaxy S20",
};

const remeraCODIGO: IProductoRopa = {
  nombre: "Camiseta",
  precio: 20,
  talla: "M",
  color: "Azul",
};

console.log(celularCODIGO);
console.log(remeraCODIGO);

// EJERCICIO 5
// Crear una interfaz "ITarea"
interface ITarea {
  titulo: string;
  description: string;
  completada: boolean;
}

// A partir de la interfaz Itarea
// Omit<nombreInterfaz, "propiedad"> para omitir una propiedad
interface ITareaParaEntregar extends Omit<ITarea, "description"> {
  fechaLimite: string;
}

const tarea: ITarea = {
  titulo: "TypeScript II",
  description: "Configuración y práctica",
  completada: false,
};

const tareaParaEntregar: ITareaParaEntregar = {
  titulo: "Proyecto Integrador M3",
  completada: false,
  fechaLimite: "2024-08-30",
};

console.log(tarea);
console.log(tareaParaEntregar);

// EJERCICIO 6
// Imagina que estás diseñando un sistema para una escuela de música.
// Debes modelar a los Estudiantes y los Profesores que pueden estar inscriptos en diferentes Cursos.
// Además, un Usuario puede ser un Estudiante o un Profesor.

// 1. Alias de tipos:
// Define un "enum" de tipo "TGeneroMusical" que represente los géneros musicales disponibles: "Rock", "Jazz", "Clásica", "Pop", "Hip-Hop":
enum TGeneroMusical {
  Rock = "Rock",
  Jazz = "Jazz",
  Clasica = "Clásica",
  Pop = "Pop",
  HipHop = "Hip-Hop",
}

// Define un "alias" de tipo "TInstrumento" que represente los instrumentos que se pueden tocar: "Guitarra", "Piano", "Batería", "Saxofón", "Bajo":
type TInstrumento = "Guitarra" | "Piano" | "Bateria" | "Saxofón" | "Bajo";

// 2. Interfaces:
// Crea una interfaz "TPersona" que tenga las propiedades nombre (cadena) y edad (número):
interface TPersona {
  nombre: string;
  edad: number;
}

// Crea una interfaz "TEstudiante" que extienda de "TPersona" y añada las propiedades:
// nivel: cadena (por ejemplo, "Principiante", "Intermedio", "Avanzado")
// instrumentos: una lista de Instrumento[].
interface TEstudiante extends TPersona {
  nivel: string;
  instrumentos: TInstrumento[];
}

// Crea una interfaz TProfesor que extienda de TPersona y añada las propiedades:
// experiencia: número de años de experiencia.
// generoEspecialidad: un valor de GeneroMusical.
interface TProfesor {
  experiencia: number;
  generoEspecialidad: TGeneroMusical;
}

// 3. Intersección de tipos:
// Define un alias de tipo Usuario que puede ser un Estudiante o un Profesor:
type TUsuario = "Estudiante" | "Profesor";

// 4. Instancias:
// Crea al menos un objeto de tipo Estudiante:
const lisa: TEstudiante = {
  nombre: "Lisa",
  edad: 15,
  nivel: "Principiante",
  instrumentos: ["Guitarra", "Piano"],
};

// Crea al menos un objeto de tipo Profesor:
const largo: TProfesor = {
  experiencia: 10,
  generoEspecialidad: TGeneroMusical.Rock,
};

// Crea una función mostrarUsuario(usuario: Usuario) que acepte un Usuario e imprima información relevante según sea Estudiante o Profesor:
function mostrarUsuario(usuario: TUsuario) {
  if (usuario === "Estudiante") {
    console.log("Estudiante:", lisa);
  } else {
    console.log("Profesor:", largo);
  }
}

// mostrarUsuario(lisa);
// mostrarUsuario(largo);

mostrarUsuario("Estudiante");
mostrarUsuario("Profesor");
