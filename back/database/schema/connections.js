const { Users, AuthToken, Room, UserRoom } = require('./index')

module.exports = {

    belongsToAuthTokenUser: AuthToken.belongsTo(Users),

    belongToManyRoomUser: Room.belongsToMany(Users, {
        through: UserRoom,
        foreignkey:'UserId',
        as: 'room_user'
    }),
    belongToManyUserRoom: Users.belongsToMany(Room, {
        through: UserRoom,
        foreignkey:'RoomId',
        as: 'user_room'
    }),

}
