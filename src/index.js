//Import the framework
const express = require('express');
//Import Path for set public route
const path = require('path');

//Import Body-Parser
const parser = require('body-parser');

//Import Session
const session = require('express-session');

//Instace the framework
const app = express();

//Set the view engine to ejs
app.set('view engine', 'ejs');

//Enable the session
const lifeCicle = 1000 * 60 * 60 * 24;

app.use(session({
    secret: "Nimeavles#2652033",
    saveUninitialized:true,
    cookie: { maxAge: lifeCicle },
    resave: false,
}));

//Enable the body parser
app.use(
    parser.urlencoded({
        extended: true,
    })
);

app.use(parser.json());

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/login.routes'));
app.use(require('./routes/signup.routes'));
app.use(require('./routes/logout.routes'));
app.use(require('./routes/contacts.routes'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

//Run the server
app.listen(process.env.PORT || 3000, () => console.log('App listening on port 3000'))