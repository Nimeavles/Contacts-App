const routes = require('express').Router();
const Auth = require('../controllers/Auth.controller');
const bcrypt = require('bcrypt');

routes.get('/login', (req, res) => {
    res.render(`${__dirname}/../views/login`)
});

routes.post('/login', (req, res)  => {
    new Auth(req, res).Login()
    .then(queryDb => {
        bcrypt.compare(req.body.password, queryDb[0].password, (err, result) => {
            if (result) {
                req.session.userId = queryDb[0].id;
                res.status(200).json({
                    login: 'ok'
                })
            }else{
                res.status(304).json({
                    login: 'failed'
                })
            }
        });
    })

    .catch(err => {
        res.json({error: err})
    })
    
});

module.exports = routes;