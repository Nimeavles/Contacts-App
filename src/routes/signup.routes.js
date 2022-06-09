const routes = require('express').Router();
const Auth = require('../controllers/Auth.controller');

routes.get('/signup', (req, res) => {
    res.render(`${__dirname}/../views/signup`);
});

routes.post('/signup', (req, res) => new Auth(req).SignUp(res));

module.exports = routes;