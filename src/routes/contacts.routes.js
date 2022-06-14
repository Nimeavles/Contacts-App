const routes = require('express').Router();
const isLoggedin = require('../middlewares/isLoggedIn');
const {getContacts, addContact, deleteContact, updateContact} = require('../controllers/Contacts.controller');

routes.get('/contacts', isLoggedin, (req, res, next) => {
    let session = req.session.user;
    getContacts(session.id)
        .then((contacts) => {
            res.render(`${__dirname}/../views/contacts`, {
                contacts
            })
        })

});

routes.get('/profile', isLoggedin, (req, res) => {
    res.render(`${__dirname}/../views/profile`, {
        req
    })
});

routes.get('/contacts/delete/:id', isLoggedin, (req, res) => {
    deleteContact(req)
    res.redirect('/profile') 
})

routes.get('/contacts/add', isLoggedin, (req, res) => {
    res.render(`${__dirname}/../views/addContact`);
});

routes.post('/contacts/add', isLoggedin, (req, res) => {
    addContact(res, req);
});

routes.get('/contacts/edit/:id', (req, res) => {
    res.render(`${__dirname}/../views/editContact`, {
        req
    });
});

routes.post('/contacts/edit/:id', isLoggedin, (req, res) => {
    updateContact(req);
    res.redirect('/profile') 
})

module.exports = routes;