const routes = require('express').Router();
const isLoggedin = require('../middlewares/isLoggedIn');
const {getContacts, addContact, deleteContact} = require('../controllers/Contacts.controller');
const pool = require('../config/database')

routes.get('/contacts', isLoggedin, (req, res, next) => {
    let session = req.session.user;
    getContacts(session.id)
        .then((contacts) => {
            res.render(`${__dirname}/../views/contacts`, {
                contacts: contacts
            })
        })

});

routes.get('/profile', isLoggedin, (req, res) => {
    res.render(`${__dirname}/../views/profile`, {
        req: req
    })
});

routes.get('/contacts/delete/:id', isLoggedin, async (req, res) => {
    deleteContact(req)
    res.redirect('/profile') 
})

routes.get('/contacts/add', isLoggedin, (req, res) => {
    res.render(`${__dirname}/../views/addContact`);
});

routes.post('/contacts/add', isLoggedin, (req, res) => {
    addContact(res, req);
});

module.exports = routes;