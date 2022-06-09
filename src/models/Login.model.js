const pool = require('../config/database');
const bcrypt = require('bcrypt');

async function LogIn(res, email, password) {
    try {
        const [query] = await pool.query('SELECT * FROM `user` WHERE email = ?', [email])
        bcrypt.compare(password, query[0].password, function(err, result) {
            result ? res.send('login') : res.json({'error': 'error'});
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = LogIn;