const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render(`${__dirname}/../views/home`)
})

module.exports = routes;