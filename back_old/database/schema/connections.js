const { Room, User, AuthToken } = require('./index')

module.exports = {

    belongToManyRoomUser: Room.belongsToMany(User, {
        through: 'UserRoom',
        as: 'room_user'
    }),
    belongToManyUserRoom: User.belongsToMany(Room, {
        through: 'UserRoom',
        as: 'user_room'
    }),

    hasOneUserRoom: User.hasOne(Room),

    belongsToAuthTokenUser: AuthToken.belongsTo(User),

}