/* *** EJEMPLO 1: AGREGAR AUTOR A LA PÁGINA *** */

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando método seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual utilizando el input que se encuentra en el footer.
// Ej: 'Aplicación creada por Gama'
// name, setName, createdBy
// Tu código aca:

const setNameButton = document.getElementById("setName");

const setNameHandler = () => {
	const nameInput = document.getElementById("name");
	const createdBy = document.getElementById("createdBy");

	const name = nameInput.value;

	createdBy.innerHTML = `Aplicación creada por: ${name}`;

	nameInput.value = "";
};

setNameButton.addEventListener("click", setNameHandler);

/* *** EJEMPLO 2: CREAR IMÁGENES CON LOS ARCHIVOS DE ASSETS *** */

// Crear un array con los nombres de las imágenes que se encuentran en la carpeta 'assets'
// Crear una función cargarImagen que reciba como parámetro el nombre de una imagen y devuelva la ruta al src
// correspondiente a la imagen
// Ej: crearImagen('abril.jpg') debe devolver 'assets/abril.jpg'

const imagenes = [
	"abril.jpg",
	"bebop.webp",
	"destructor.jpg",
	"rocoso.webp",
	"splinter.jpg",
	"leonardo.jpg",
	"miguelangel.webp",
	"donatello.jpg",
	"rafael.png",
	"destructor.jpg",
	"krang.jpg",
];

const cargarImagen = (imgName) => {
	return `assets/${imgName}`;
};

/* Probando src
	cosnt imgPrueba = document.createElement("img")
	const src = cargarImagen("donatello.jpg")
	imgPrueba.src = src

	console.log(imgPrueba)

	No podemos usar forEach proque recorre todas las imagenes de una vez y muestra la última solamente
	*/
let index = 0;

const renderizarImagen = () => {
	const characterImg = document.getElementById("characterImg");

	characterImg.src = cargarImagen(imagenes[index]);

	if (index === imagenes.length - 1) {
		index = 0;
	} else {
		index++;
	}
};

renderizarImagen();

const characterChange = document.getElementById("characterChange");

characterChange.addEventListener("click", renderizarImagen);
