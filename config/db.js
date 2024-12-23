const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0 
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error al conectar a MySQL:", err);
    } else {
        console.log("Conexión exitosa a MySQL");
        connection.release(); 
    }
});

module.exports = pool.promise(); 
