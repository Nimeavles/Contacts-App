//Import the framework
const express = require('express');

//Import Path for set public route
const path = require('path');

//Import Body-Parser
const parser = require('body-parser');

//Instace the framework
const app = express();

//Set the view engine to ejs
app.set('view engine', 'ejs');

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

// Public
app.use(express.static(path.join(__dirname, 'public')));

//Run the server
app.listen(3000, '0.0.0.0', () => console.log('App listening on port 3000'))