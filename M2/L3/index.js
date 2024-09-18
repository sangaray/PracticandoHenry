const lista = document.getElementById("lista");

const namesArray = ["Jorge", "Belu", "Game", "Alejo", "Alejandro"];

console.log(namesArray);

namesArray.forEach((name) => {
  const li = document.createElement("li");
  li.innerHTML = name;
  li.classList.add("list-group-item");
  lista.appendChild(li);
  li.addEventListener("mouseenter", (event) => {
    event.target.classList.add("active");
  });

  li.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("active");
  });
});
