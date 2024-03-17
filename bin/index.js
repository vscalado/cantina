const express = require('express');
const bp = require('body-parser');

//Create application
const app = express();

//Configs to Parser
app.use(bp.json({limit: '10mb'}));
app.use(bp.urlencoded({extended: false}));


// configs to Front-End
app.set('view engine', 'ejs');
app.set('views', 'views');

//Defining static files
app.use(express.static('public'));

//Call routes
app.use('/', (req, res) => {
    return res.render('login');
});

//Exporting Application
module.exports = app;