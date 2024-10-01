document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("movieForm").reset();
});

document.getElementById("movieForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value;
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // En este punto, podrías enviar los datos a tu backend o hacer otra acción
  alert("Formulario enviado correctamente.");
});
