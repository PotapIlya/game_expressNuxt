const express = require('express');
const app = express();
const authController = require('../../controllers/auth/authController');


/*
    create user
 */
app.post('/auth/register', authController.register );
app.post('/auth/login', authController.login );

// app.get('/auth/logout/:token', authController.logout );



module.exports = app;






