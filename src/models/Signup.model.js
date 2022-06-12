const pool = require('../config/database');

async function Signup(password, email, name) {
    try {
        return new Promise(async (resolve, reject) => {
            await pool.query('INSERT INTO `user` (name, password, email) VALUES (?, ?, ?);', [name, password, email]);
            const [query] = await pool.query('SELECT * FROM `user` WHERE email = ?', [email]);
            if(query.length >= 1){
                resolve(query);
            }else{
                reject('Something was Bad')
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = Signup;