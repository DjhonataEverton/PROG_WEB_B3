const db = require("../database/mySQL")

async function getUsuarios() {
    const conn = await db.conectar();
    const [rows] = await conn.query("select * from usuarios");
    return rows;
}

async function saveUsuario(usuario) {
    const conn = await db.conectar();
    const sql = "insert into usuarios (email, senha, nome) values (?, ?, ?)";
    const values = [usuario.email, usuario.senha, usuario.nome];
    return await conn.query(sql, values);
}

async function updateUsuario(email, usuario) {
    const conn = await db.conectar();
    const sql = "update usuario set nome=?, senha=? where email=?";
    const values = [usuario.nome, usuario.senha, email];
    return await conn.query(sql, values);
}

async function deleteUsuario(email) {
    const conn = await db.conectar();
    const sql = "delete from usuarios where email=?";
    return await conn.query(sql[email]);
}

module.exports = { getUsuarios, saveUsuario, updateUsuario, deleteUsuario }