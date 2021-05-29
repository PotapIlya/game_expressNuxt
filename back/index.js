const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json()); // post query

const cookieParser = require('cookie-parser');
app.use(cookieParser());


// app.get('/token', (req, res) =>
// {
//     res.cookie('token', '228')
//     return res.json(req.cookies)
// })
// app.get('/', (req, res) =>
// {
//     // res.cookie('token', '1234')
//     return res.json(req.cookies)
// })

const router = require('./routes/index');
app.use(router);



// const app = require('express')();
const server = require('http').createServer(app,
    {
        cors: {
            origin: '*',
        }
    });
const io = require('socket.io')(server);

const consola = require('consola')

//
//
//
// const userModel = require('./socket/user/user')()
// const messageModel = require('./socket/user/message')()
//
//
// io.on('connection', socket =>
// {
//
//     socket.on("createUser", (user, cb) =>
//     {
//         userModel.addUser({
//             ...user,
//             id: socket.id
//         })
//         cb({ id: socket.id })
//     });
//
//     socket.on('leftChat', cb =>
//     {
//         const id = socket.id;
//         const user = userModel.getUser(id);
//         if (user)
//         {
//             userModel.removeUser(id);
//             socket.leave(user.room);
//             io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
//             io.to(user.room).emit('newMessage', new messageModel('admin', `User ${user.name} left chat`))
//         }
//         cb();
//     });
//
//     socket.on("joinRoom", user =>
//     {
//         socket.join(user.room);
//         io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
//         socket.emit('newMessage', new messageModel('admin', `Hello, ${user.name}`));
//         socket.broadcast
//             .to(user.room)
//             .emit('newMessage', new messageModel('admin', `User ${user.name} connected to chat`));
//     });
//
//     socket.on('createMessage', (data, cb) =>
//     {
//         const user = userModel.getUser(data.id);
//         if (user) {
//             io.to(user.room).emit('newMessage', new messageModel(user.name, data.text, data.id))
//         }
//         cb()
//     });
//
//     socket.on('disconnect', () =>
//     {
//         const id = socket.id;
//         const user = userModel.getUser(id);
//         if (user) {
//             userModel.removeUser(id);
//             socket.leave(user.room);
//             io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
//             io.to(user.room).emit('newMessage', new messageModel('admin', `User ${user.name} left chat`))
//         }
//     });
//
// })



server.listen(3001, () => {
    consola.ready({
        message: 'Server listening on http://localhost:3001',
        badge: true
    });
});