const db = require("../database")

async function getUsuarios() {
  const conn = await db.conectar();
  const [rows] = await conn.query("SELECT * FROM usuarios;");
  return rows;
}

async function saveUsuario(usuario) {
  const conn = await db.conectar();
  const sql = "INSERT INTO usuarios(email,senha,nome) VALUES ($1,$2,$3);";
  const values = [usuario.email, usuario.senha, usuario.nome];
  return await conn.query(sql, values);
}

async function updateUsuario(email, usuario) {
  const conn = await db.conectar();
  const sql = "UPDATE usuario SET nome=$1, senha=$2 WHERE email=$3";
  const values = [usuario.nome, usuario.senha, email];
  return await conn.query(sql, values);
}

async function deleteUsuario(email) {
  const conn = await db.conectar();
  const sql = "DELETE FROM usuarios where email=$1;";
  return await conn.query(sql, [email]);
}
module.exports = { getUsuarios, saveUsuario, updateUsuario, deleteUsuario }