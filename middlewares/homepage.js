const express = require('express');
const session = require('express-session');
const database = require('../configs/database');
const homepage = express.Router();

homepage.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true	
}));

homepage.get('/homepage', (req, res) => {

    if(req.session.loggedin){
        res.render('pages/home', {username: session.fullname});

    } else {
        res.redirect('/');
    }
});

//LOGOUT
homepage.get('/logout', (req, res) =>{
    req.session.destroy();
    res.redirect('/');
    res.end();
})

module.exports = homepage;