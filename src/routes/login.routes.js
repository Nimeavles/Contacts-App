const routes = require('express').Router();
const Auth = require('../controllers/Auth.controller');

routes.get('/login', (req, res) => {
    res.render(`${__dirname}/../views/login`)
});

routes.post('/login', (req, res) => {new Auth(req, res).Login(this.email)});

module.exports = routes;