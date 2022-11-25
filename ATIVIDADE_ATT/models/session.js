const db = require("../database/mySQL");

async function login(email, senha) {
    const conn = await db.conectar();
    const sql = "select * from usuarios where email = ? and senha = ? ";
    const values = [email, senha];
    const [rows] = await conn.query(sql, values);
    if (rows.length === 1) {
        return true;
    } else {
        return false;
    }
}
module.exports = { login };