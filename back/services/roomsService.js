const apiError = require('./../exeptions/apiError')
const tokenService = require('./../services/auth/tokenService')

const { Users, Room, UserRoom } = require('./../database/schema/index')
const { belongToManyRoomUser, belongToManyUserRoom } = require('./../database/schema/connections')

class RoomsService
{
    async all(){
        return await Room.findAll({
            include: [{
                model: Users,
                as: 'room_user',
                where: {
                    [sequelize.fn('array_length', sequelize.col('myArray'), 1)] : 10
    }
            } ],
        })
        // return await Room.findByPk(2, {
        //     include: [ { model: Users, as: 'room_user' } ]
        // });
        // io.to(data.roomId).emit('updateArrayUsersRoom', await Room.findByPk(data.roomId, {
        //     include: 'room_user'
        // }),
    }
    async create(name, token) {
        try{
            if (!name || !token){
                console.log('roomsService 14 line')
                // проверка на наличие + на такое же имя
            }
            const createRoom = await Room.create({
                UserId: tokenService.validateRefreshToken(token).id,
                name: name,
            });
            await UserRoom.create({
                RoomId: createRoom.id,
                UserId: createRoom.UserId,
                status: false,
            })

            return createRoom;

        } catch (e) {
            return e;
        }
    }
    // async relatedModel(data){
    //     try{
    //         await UserRoom.create({
    //             RoomId: data.id,
    //             UserId: data.UserId,
    //             status: false,
    //         })
    //     } catch (e) {
    //         return e;
    //     }
    // }
    async join(roomId, token){
        const userId = tokenService.validateRefreshToken(token).id;
        const data = await UserRoom.findOne({
            where: {
                RoomId: roomId,
                UserId: userId
            },
        })
        if (data){
            throw apiError.badRequest(`Пользователь с именем ${name} уже существует`);
        }
        return await UserRoom.create({
            RoomId: roomId,
            UserId: userId,
            status: false,
        })

    }

}

module.exports = new RoomsService();
