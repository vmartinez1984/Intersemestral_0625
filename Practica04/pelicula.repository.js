//Este archivo nos ayudara a simular la base de datos

//Tabla o colección
let peliculas = [
  {
    id: 1,
    titulo: "Thelma",
    resumen: "Un anciana ha sido estafada, pero el dara con el culpable",
    visto: false,
  },
  {
    id: 2,
    titulo: "RRR",
    resumen: "Primeros levantamientos de la India en la colonización inglesa",
    visto: true,
  },
];

function obtenerPorId(id) {
  let pelicula = peliculas.find((x) => x.id == id);

  return pelicula;
}

function obtenerTodos() {
  return peliculas;
}

function agregar(pelicula) {
  let id = peliculas.length + 1;
  pelicula.id = id;
  peliculas.push(pelicula);

  return id;
}

module.exports = {
    obtenerPorId,
    obtenerTodos,
    agregar
}