const SignUp = require('../models/Signup.model');
const bcrypt = require('bcrypt');
const LogIn = require('../models/Login.model');
const res = require('express/lib/response');

class Auth {

    constructor(req, res) {
        this.email = req.body.email;
        this.password = req.body.password;
        this.name = req.body.name;
        this.saltRounds = 10;
        this.res = res
    }

    SignUp() {
        if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|nsdelvalle)\.(?:|com|es|net)+$/.test(this.email)
            && this.password.length >= 8
            && this.name !== '' || this.name === undefined
            && this.password !== '' || this.password === undefined
            && this.password.length >= 8) {
            //Hash the password
            bcrypt.genSalt(this.saltRounds, (err, salt) => {
                bcrypt.hash(this.password, salt, (err, hash) => {
                    SignUp(this.res, hash, this.email, this.name);
                });
            });
        }
    }

    async Login() {
        await LogIn(this.res, this.email, this.password);
    }
}

module.exports = Auth;