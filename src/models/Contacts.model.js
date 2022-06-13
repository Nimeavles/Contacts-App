const pool = require('../config/database');

function getContactsDb(user_id) {
    return new Promise(async (resolve, reject) => {
        try {
            const [query] = await pool.query("SELECT * FROM `contacts` WHERE user_id = (?);", [user_id])
            resolve(query);
        } catch (err) {
            reject(err.message);
        }
    })
}

async function addContactDb(res, user_id, contact_name, contact_description = null, contact_phone) {
    try {
        await pool.query("INSERT INTO `contacts` (user_id, contact_name, contact_description, contact_phone) VALUES (?, ?, ?, ?);", [user_id, contact_name, contact_phone, contact_description]);
        res.redirect('/contacts');
    } catch (error) {
        res.json({err: error.message});
    }
}

async function deleteContactDb(contact_id, user_id) {
    try {
        await pool.query("DELETE FROM `contacts` WHERE id = (?) AND user_id = (?);", [contact_id, user_id]);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getContactsDb,
    addContactDb,
    deleteContactDb
};