const Activity = require("./Activity");

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  createActivity(title, description, imgUrl) {
    const newActivity = new Activity(this.id, title, description, imgUrl);
    this.id++;
    this.activities.push(newActivity);
  }

  getAllActivities() {
    return this.activities;
  }
}

// Ahora vamos a exportar o hacer disponible la clase para que index pueda trabajar con ella. Para esto usamos module.exports. De esta manera se crea una abstracción que, cada módulo sabe lo que tiene que hacer sin saber lo que los otros módulos tienen que hacer.
// Creamos una carpeta llamada models donde se guardan las clases del proyecto

module.exports = Repository;
