const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');
const { User, Room, AuthToken, UserRoom, GameRoom } = require('../../database/schema/index');

// const { findUserIdByToken } = require('./../../services/auth/token')

exports.getAll = async  (data, cb) =>
{
    cb(await Room.findAll());
};
exports.store = async (data, cb) =>
{
    AuthToken.findOne(
        {
            where: { token : data.token}
        }
    ).then( async ( token) => {
        if (!token){
            return cb(null, 'Error token')
        }

        await Room.create({
            name: data.name,
            UserId: token.UserId,
        }).then( async (room) =>
        {
           // await UserRoom.create({
           //      UserId: room.UserId,
           //      RoomId: room.id,
           //  })
            cb(room);
        });
    })
};



exports.join = async (data, cb) =>
{
    AuthToken.findOne({
        where: {
            token : data.token
        }})
        .then( async ( token) => {
            if (!token){
                return cb(null, 'Error token')
            }

            await UserRoom.create({
                UserId: token.UserId,
                RoomId: data.roomId,
                status: false,
            })
                .then( data => {
                    cb({ success: data });
                })
                .catch( error => {
                    cb(null, error);
                });

        })
            .catch( error => {
            console.log('ERROR__'+ error);
        })
};

exports.checkRoom = async (data, cb) =>
{
    AuthToken.findOne(
        {
            where: { token : data.token}
        }
    ).then( async ( token) => {
        if (token)
        {
            // const x = await Rooms.findAll()
            cb(12)
            // cb( await Rooms.findByPk(data.roomId), {
            //     include: Users
            // })
        }
        else{
            cb(null, 500);
        }
    })
};


exports.storeGameRoom = async (data, cb) =>
{
    AuthToken.findOne({
        where: { token : data.token}
    }).then( async ( token) => {
        if (token)
        {
            if (!token){
                //
            }
            await GameRoom.create({
                UserId: token.UserId,
                RoomId: data.roomId,
                round: data.round,
                selectNumber: data.selectCheckbox
            })
                .then( gameRoom =>
                {
                    cb(gameRoom);
                })
                    .catch(error => {
                    console.log('ERROR__'+error)
                })
        }
    }).catch( error => {
        console.log('ERROR__'+ error);
    })
};

