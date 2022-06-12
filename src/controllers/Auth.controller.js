const SignUp = require('../models/Signup.model');
const bcrypt = require('bcrypt');
const LogIn = require('../models/Login.model');

class Auth {

    constructor(req, res) {
        this.email = req.body.email;
        this.password = req.body.password;
        this.name = req.body.name;
        this.saltRounds = 10;
        this.res = res
    }

    SignUp() {
        return new Promise((resolve, reject) => {
            if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|nsdelvalle)\.(?:|com|es|net)+$/.test(this.email)
                && this.password.length >= 8
                && this.name !== '' || this.name === undefined
                && this.password !== '' || this.password === undefined
                && this.password.length >= 8) {
                bcrypt.genSalt(this.saltRounds, (err, salt) => {
                    bcrypt.hash(this.password, salt, (err, hash) => {
                        resolve(SignUp(hash, this.email, this.name));
                    });
                })
            }
        })

    }

    async Login() {
        return LogIn(this.res, this.req, this.email, this.password);
    }
}

module.exports = Auth;