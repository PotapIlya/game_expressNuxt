const express = require('express');
const router = express();
// const authController = require('../../controllers/auth/authController');
// const { body } = require('express-validator')
const authMiddleware = require('./../middleware/authMiddleware');

const roomsController = require('./../controllers/roomController')

router.get('/rooms/all', roomsController.all );
// router.get('/rooms/all', authMiddleware, roomsController.all );
// router.post('/rooms/create', authMiddleware, roomsController.create );
// router.post('/rooms/join', authMiddleware, roomsController.join );





module.exports = router;

