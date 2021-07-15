const express = require('express');
const app = express();

const roomsController = require('../../controllers/roomsController');

const authMiddleware = require('./../../');

app.get('/rooms/all', authMiddleware, roomsController.getAll );

// app.get('/rooms', roomsController.getAll );
// app.post('/rooms/store', roomsController.store );
// app.post('/rooms/join', roomsController.join );
//
// app.post('/rooms/game/storeGameRoom', roomsController.storeGameRoom );
//
// app.post('/rooms/checkRoom', roomsController.checkRoom );


module.exports = app;






