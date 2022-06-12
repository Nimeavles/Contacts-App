const routes = require('express').Router();
const logout = require('../controllers/Logout')

routes.get('/logout', (req, res, next) => logout(req, res, next));

module.exports = routes;