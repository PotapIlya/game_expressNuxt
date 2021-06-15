// const Router = require('express').Router;
// const router = new Router()

const express = require('express');
const router = express();
const authController = require('../../controllers/auth/authController');


router.post('/auth/register', authController.register );
router.post('/auth/login', authController.login );
router.post('/auth/logout', authController.logout );

router.post('/auth/refresh', authController.refresh );


router.get('/users', authController.getUsers );



module.exports = router;

