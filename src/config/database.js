const { createPool } = require('mysql2/promise');

const pool = createPool({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'Contacts_App'
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has to many connections');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused');
        }
    }

    if (connection) {
        connection.release();
        console.log('DB is Connected');
    }
});

module.exports = pool;