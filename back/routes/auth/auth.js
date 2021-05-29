const express = require('express');
const app = express();
const authController = require('../../controllers/auth/authController');



app.post('/auth/register', authController.register );
app.post('/auth/login', authController.login );


app.post('/auth/logout', authController.logout );
app.post('/auth/checkAuth', authController.checkAuth );


module.exports = app;






