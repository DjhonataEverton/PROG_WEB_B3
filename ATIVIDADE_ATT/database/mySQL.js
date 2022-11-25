const mysql = require('mysql2/promise');

async function conectar() {
    if (global.connection && global.connection.state != 'disconnected') {
        return global.connection;
    }

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "sistema",
        password: "tvUlW2Ib4tZ-MDbnOIRMPlU57rTxt0tg",
        port: 3308
    });
    global.connection = connection;
    return connection;
}

module.exports = { conectar }