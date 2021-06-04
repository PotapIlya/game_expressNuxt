const express = require('express');
const app = express();

const roomsController = require('../../controllers/roomsController');



app.get('/rooms', roomsController.getAll );
app.post('/rooms/store', roomsController.store );
app.post('/rooms/join', roomsController.join );

app.post('/rooms/checkRoom', roomsController.checkRoom );


module.exports = app;






