function logOut (req, res, next) {
    req.session.destroy();
    res.redirect('/')
}

module.exports = logOut;