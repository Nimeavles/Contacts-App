const pool = require('../config/database');

async function Signup(res, password, email, name) {
    try {
        const query = await pool.query('INSERT INTO `user` (name, password, email) VALUES (?, ?, ?);', [name, password, email]);
        if (query.length >= 1) {
            res.status(200).json({
                status: "Correct Signup"
            })
        }
        console.log(query);
    } catch (err) {
        console.log(err.message);
        res.status(304).json({
            error: 'Something were bad'
        })
    }
}

module.exports = Signup;