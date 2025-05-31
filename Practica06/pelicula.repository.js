//Configuración de base de datos
const mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "BaseDeDatos",
});

async function obtenerPorId(id) {
  const query = "SELECT * FROM pelicula WHERE id = " + id;
  const resultado = await con.promise().query(query)
  console.log(resultado)

  return resultado[0][0];
}

async function obtenerTodos() {
  const query = "SELECT * FROM pelicula";
  const resultado = await con.promise().query(query)
  console.log(resultado)

  return resultado[0];
}

async function agregar(pelicula) {
  const sql =
    "INSERT INTO pelicula (titulo, resumen, visto) VALUES (?, ?, false);";
  const result = await con.promise().query(
    sql,
    [
      pelicula.titulo,
      pelicula.resumen,
    ])
  console.log(result);
  return result.insertId
}

module.exports = {
  obtenerPorId,
  obtenerTodos,
  agregar,
};
