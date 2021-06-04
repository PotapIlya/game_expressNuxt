const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());


// const { Room } = require('./database/schema/index')
// const { belongToManyRoomUser } = require('./database/schema/connections')
// app.get('/', async (req, res) =>
// {
//     await Room.findOne({
//         id: 1,
//         include: 'room_user'
//     }).then( (room) => {
//         res.json(room)
//     })
// })


const router = require('./routes/index');
app.use(router);


// const app = require('express')();
const server = require('http').createServer(app, {
        cors: {
            origin: '*',
        }
    });
const io = require('socket.io')(server);

const consola = require('consola')


const userModel = require('./socket/user/user')()
const messageModel = require('./socket/user/message')()


io.on('connection', socket =>
{

    // socket.on("createUser", (user, cb) =>
    // {
    //     userModel.addUser({
    //         ...user,
    //         id: socket.id
    //     })
    //     cb({ id: socket.id })
    // });

    // socket.on('leftChat', cb =>
    // {
    //     const id = socket.id;
    //     const user = userModel.getUser(id);
    //     if (user)
    //     {
    //         userModel.removeUser(id);
    //         socket.leave(user.room);
    //         io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
    //         io.to(user.room).emit('newMessage', new messageModel('admin', `User ${user.name} left chat`))
    //     }
    //     cb();
    // });



    const { Room } = require('./database/schema/index')
    socket.on("joinRoom", async (data) =>
    {
        socket.join(data.roomId);
        io.to(data.roomId).emit('updateArrayUsersRoom', await Room.findOne({
            id: data.roomId,
            include: 'room_user'
        }),

     );

        // AuthToken.findOne(
        //     {
        //         where: { token : data.token}
        //     }
        // ).then( async ( token) => {
        //     if (token)
        //     {
        //         io.to(data.roomId).emit('updateArrayUsersRoom', await Rooms.findOne({
        //             where: { id: data.roomId },
        //             // include: Users
        //         }) );
        //
        //     }
        // })


        // io.to(data.roomId).emit('updateArrayUsersRoom', userModel.getUsersByRoom(user.room));
        // io.to(data.roomId).emit('updateArrayUsersRoom', userModel.getUsersByRoom(user.room));

        // socket.emit('newMessage', new messageModel('admin', `Hello, ${user.name}`));
        // socket.broadcast
        //     .to(user.room)
        //     .emit('newMessage', new messageModel('admin', `User ${user.name} connected to chat`));
    });

    // socket.on('createMessage', (data, cb) =>
    // {
    //     const user = userModel.getUser(data.id);
    //     if (user) {
    //         io.to(user.room).emit('newMessage', new messageModel(user.name, data.text, data.id))
    //     }
    //     cb()
    // });
    //
    // socket.on('disconnect', () =>
    // {
    //     const id = socket.id;
    //     const user = userModel.getUser(id);
    //     if (user) {
    //         userModel.removeUser(id);
    //         socket.leave(user.room);
    //         io.to(user.room).emit('updateUsers', userModel.getUsersByRoom(user.room));
    //         io.to(user.room).emit('newMessage', new messageModel('admin', `User ${user.name} left chat`))
    //     }
    // });

})



server.listen(3001, () => {
    consola.ready({
        message: 'Server listening on http://localhost:3001',
        badge: true
    });
});