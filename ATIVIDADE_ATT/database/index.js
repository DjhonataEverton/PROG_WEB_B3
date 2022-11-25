const { Pool } = require('pg');

async function conectar() {
  if (global.connection)
    return global.connection.connect();


  const pool = new Pool({
    connectionString: 'postgres://postgres:docker@localhost:5432/aula'
  });


  const client = await pool.connect()
  console.log("Criou pool de conexões no PostgreSQL!");


  //guardando para usar sempre o mesmo
  global.connection = pool;
  return pool.connect();
}

module.exports = { conectar }