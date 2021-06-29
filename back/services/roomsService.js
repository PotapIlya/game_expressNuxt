const { Users, Room, UserRoom } = require('./../database/schema/index')
const apiError = require('./../exeptions/apiError')
const tokenService = require('./../services/auth/tokenService')


class RoomsService
{
    async all(){
        return await Room.findOne({
            where: { id: 1 },
            include: [ { model: Users, as: 'user_room' } ]
        });
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
            })
            await UserRoom.create({
                RoomId: createRoom.id,
                UserId: createRoom.UserId,
            })

            return createRoom;

        } catch (e) {
            return e;
        }

    }

}

module.exports = new RoomsService();
