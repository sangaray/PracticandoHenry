// NODE
// Es un paquete de herramientas de nodejs
// Para inicializar un poryecto de nodejs, usamos npm init, esto crea el archivo package.json del proyecto. En este archivo se guadarán todas las dependencias y gestiona la información del proyecto
// Los archivos de js se llaman módulos en lugar de archivos
// npm start, ejecuta el proyecto, para esto agrego en el package.json el comando "start": "node index.js".
// No se recomienda innovar mucho con los nombres de los scripts, si pongo un nombre personalizado, debo agreagar npm run <nombre del comando> en el package.json. Se recomienda seguir las convenciones de npm

/* const num1 = 5;

const num2 = 10;

console.log(num1 + num2);

console.log("La suma se realizó con éxito"); */

// Módulo, es una porción de código encapsulada y reutilizable, que va a estar en su propio archivo.
// Si el trabajo o responsabilidad del index es sólo instanciar el repositorio y trabajar con las funcionalidades. Los módulos deben tener una responsabilidad bien delimitada, bien definida
// Entonces ahora vamos a crear un módulo para activity y repository y me voy a llevar las clases a sus repectivos módulos.
// Si ahora ejecuto el proyecto va a dar error porque no se puede acceder a las clases de activity y repository, porque no están en el index.js. Cada módulo por separado hacen lo que tienen que hacer, pero index necesita a repository y repository necesita a activity para ejecutarse.
// Dependencias, uno o varios módulos que ponen a disposición herramientaas que pueden ser requeridos para ser utilizados en nuestros proyectos. Se llama dependencia porque voy a depender de que ese paquete esté para que el proyecto funcione
// npm es un gestor de dependencias, es una herramienta que nos ayuda a instalar dependencias de paquetes de javascript. Para instalar dependencias usamos npm install <paquete>, de nodejs
// El package.json contiene todas las dependencias usadas en el proyecto.
// Jamine por ejemplo es una depencia. Live Server también es una dependencia.

// Ahora vamos a solicitar el módulo de repository usando require
// Cualquier cambio hechos en cualquier lugar del proyecto va a afectar el resultado de la ejecución de nodemon porque el punto de entrada es index.js y es este el módulo que llama al resto de los módulos

const Repository = require("./models/Repository");

const repository = new Repository();

repository.createActivity("Salir a pasear", "Es muy buenos para la salud");

repository.createActivity("Jugar al fútbol", "Argentina campeón del mundo");

repository.createActivity("Salir a bailar", "Cuidado no beber si conduces");

// A la hora de trabajar con proyectos vamos a tener dos grupos de dependencias. Las propiamente dichas, sin las cuales el proyecto no funciona y las de desarrollo, que se usan sólo cuando trabaja la etapa de desarrollo de mi proyecto, hay otras que se van a necesitar siempre en el proyecto

// vamos a instalar una dependicia de desarrollo llamada nodemon.
// Para instalarlo usamos npm i -D nodemon
// Aparece la carpeta node modules, con muchos paquetes que están disponibles para ser utilizados, directamente o por el sistema mismo

console.log(repository.getAllActivities());
