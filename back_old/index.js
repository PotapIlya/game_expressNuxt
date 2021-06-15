const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());


const { Room, UserRoom } = require('./database/schema/index')
const { belongToManyRoomUser } = require('./database/schema/connections')
app.get('/', async (req, res) =>
{
    await UserRoom.findAll({
        where: {
            RoomId: 1,
            status: true,
        }
    }).then( allUserRoom => {
        res.json(allUserRoom)
    });
})


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
    const { belongToManyRoomUser, belongToManyUserRoom } = require('./database/schema/connections');

    socket.on("joinRoom", async (data) =>
    {
        socket.join(data.roomId);
        io.to(data.roomId).emit('updateArrayUsersRoom', await Room.findByPk(data.roomId, {
            include: 'room_user'
        }),
     )

        // io.to(data.roomId).emit('updateArrayUsersRoom', await Room.findByPk(data.roomId, {
        //     include: 'room_user'
        // }),;
        // io.to(data.roomId).emit('updateArrayUsersRoom', userModel.getUsersByRoom(user.room));

        // socket.emit('newMessage', new messageModel('admin', `Hello, ${user.name}`));
        // socket.broadcast
        //     .to(user.room)
        //     .emit('newMessage', new messageModel('admin', `User ${user.name} connected to chat`));
    });

    const { AuthToken, UserRoom, GameRoom } = require('./database/schema/index')
    socket.on('createMessage', async (data, cb) =>
    {
        io.to(data.roomId).emit('newMessage', await GameRoom.findAll({
            where: {
                RoomId: data.roomId
            }
        }));
        cb(true);
    });

    // socket.on('resGame', async (number) =>
    // {
    //     io.to(data.roomId).emit('newMessage', await UserRoom.findAll({
    //         where: {
    //             RoomId: data.roomId,
    //             status: true,
    //         }
    //     }));
    //     cb(true);
    // });

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