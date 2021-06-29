const express = require('express');
const router = express();
// const authController = require('../../controllers/auth/authController');
// const { body } = require('express-validator')
const authMiddleware = require('./../middleware/authMiddleware');

const roomsController = require('./../controllers/roomController')

router.post('/rooms/create', authMiddleware, roomsController.create );
router.get('/rooms/all', roomsController.all );




module.exports = router;

