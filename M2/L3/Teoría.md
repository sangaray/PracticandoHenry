# M2-L3 - BOOTSTRAP

## Configuración

Es un framework de CSS.
Framwork es un conjunto de heramientas que nos van a permitir, nos generan un entorno de trabajo para dar estilo a nuestros proyectos

Para que Bootstrap esté en mi proyecto, voy a su sitio donde voy a encontran cuatro enlaces 1 link, tres scripts, uno con jsquery y los otros de bootstrap. Estos links se agregan al head del html.

Los links son:

```
<link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous" />

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>

    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"></script>
```

Para aplicar un estilo lo que hago es elegir el estilo que deseo darle desde la documentación de bootstrap, selecciono y copio la clase de estilo elegido y lo pego directamente en el elemento html dentro de las comillas de la clase del mismo
https://getbootstrap.com/docs/4.3/getting-started/introduction/

## Contenedores

No hay límite para la cantidad de clases que puedo asignar a un elemento html

LAYOUT: es la distribución de los elementos en la pantalla

- clase container, ubica el elemento en un lugar lógico para el diseño

UTILITIES

- border, o border-zona
- border-primary, danger, etc. para determinar el color
- rounded, equivalente a border-radius

## Utilidades de Texto

UTILITIES - Text
Podemos aplicar alineación y peso a los textos, también darle estilos (bold, italic, etc.

- monospace, da formato de máquina de escribir
- Podemos quitar formato enlace a un elemento html, esto lo podemos hacer con la clase text-decoration-none

## List Group

Esta clase se le da al ul, y list-group-item se le da a los elementos de la lista.

### Agregar y quitar clases con javascript.

```
li.addEventListener("mouseleave", (event) => {
    event.target.classList.remove("active");
  });
});
```

## Cards y Grids

COMPONENTS
Card, son varios elementos con sus propias clases que dan como resultado una card completa que podemos modificar con los datos que queramos poner.
Debemos evitar poner un estilo dentro de los elementos html con el atributo style.

Grid, nos permite crear filas y columnas para organizar elementos.
`<div class="row">`
y a cada tarjeta debemos darle cla clase col.
Para dividir una fila en dos, div class
`<div class="w-100"></div>`
para que sirva de corte, el div debe estar vacio. Es un div invisible que parte la fila.
UTILITIES

- shadow, para darle un efecto de sombra.

## Espaciado

m, margin
p, padding
sin nada si queremos que sea en todas las direcciones
Segunda letra dirección.
t, top
b, bottom
l, left
y, eje y, arriba y abajo juntos
x, eje x, derecha e izquierda juntos
0-5, escala de separación
mt-0, margin-top 0, por ejemplo

---

<style>
  body {
    background-color: #333;
    color: white;
  }
</style>
