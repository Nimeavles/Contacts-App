const pool = require('../config/database');
const bcrypt = require('bcrypt');

async function LogIn(res, req, email, password) {
    try {
        return new Promise( async(resolve, reject) => {
            const [query] = await pool.query('SELECT * FROM `user` WHERE email = ?', [email]);
            if (query.length > 0) resolve(query);
            else {
                reject('Something was bad');
            };
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = LogIn;