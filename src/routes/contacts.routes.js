const routes = require('express').Router();
const isLoggedin = require('../middlewares/isLoggedIn');
const {getContacts, addContact} = require('../controllers/Contacts.controller');

routes.get('/contacts', isLoggedin, (req, res, next) => {
    let session = req.session.user;
    getContacts(session.id)
        .then(query => {
            res.render(`${__dirname}/../views/contacts`, data = {
                query,
                sample_data: 4
            })
            return {
                query
            }
        })

});

routes.get('/contacts/add', isLoggedin, (req, res) => {
    res.render(`${__dirname}/../views/addContact`);
});

routes.post('/contacts/add', isLoggedin, (req, res) => {
    addContact(res, req);
});

module.exports = routes;