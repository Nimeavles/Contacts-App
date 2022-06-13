const routes = require('express').Router();
const Auth = require('../controllers/Auth.controller');

routes.get('/signup', (req, res) => {
    res.render(`${__dirname}/../views/signup`);
});

routes.post('/signup', (req, res) => {
    new Auth(req).SignUp(res)
    .then((query) => req.session.user = query)
    .then(() => console.log(req.session.user))
    .then(() => res.redirect('/profile'))
    .catch(err => res.status(304).json({error: err}));
});

module.exports = routes;