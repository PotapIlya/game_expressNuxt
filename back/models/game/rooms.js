const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');
const { User, Room, AuthToken, UserRoom } = require('../../database/schema/index');

// const { findUserIdByToken } = require('./../../services/auth/token')

exports.getAll = async  (data, cb) =>
{
    const all = await Room.findAll();
    cb(all);
    // const all = Rooms.findAll();
    // if (all){
    //     cb(all)
    // } else{
    //     cb(all, 500)
    // }
};
exports.store = async (data, cb) =>
{
    AuthToken.findOne(
        {
            where: { token : data.token}
        }
    ).then( async ( token) => {
        if (token)
        {
            await Room.create({
                name: data.name,
                UserId: token.UserId,
            }).then( async (room) =>
            {
               await UserRoom.create({
                    UserId: room.UserId,
                    RoomId: room.id,
                })
                cb(room);
            });
        } else{
            cb(null, 500);
        }
    })
};



exports.join = async (data, cb) =>
{
    AuthToken.findOne(
        {
            where: { token : data.token}
        }
        ).then( async ( token) => {
            if (token)
            {
                await UserRoom.create({
                    UserId: token.UserId,
                    RoomId: data.roomId,
                })
            if (true){
                cb(true);
            }
            else{
                cb(null, 500)
            }
        }
        else{
            cb(null, 500);
        }
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

