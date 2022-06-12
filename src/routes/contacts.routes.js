const routes = require('express').Router();
const isLoggedin = require('../middlewares/isLoggedIn');
const {getContacts, addContact} = require('../controllers/Contacts.controller');

routes.get('/contacts', isLoggedin, (req, res, next) => {
    let session = req.session.user;
    getContacts(session.id)
        .then(([{contact_name, user_id}]) => {
            res.render(`${__dirname}/../views/contacts`, {
                name: contact_name,
                id: user_id
            })
        })

});

routes.get('/contacts/add', isLoggedin, (req, res) => {
    res.render(`${__dirname}/../views/addContact`);
});

routes.post('/contacts/add', isLoggedin, (req, res) => {
    addContact(res, req);
});

module.exports = routes;