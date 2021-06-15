const { Users, AuthToken } = require('./index')

module.exports = {

    belongsToAuthTokenUser: AuthToken.belongsTo(Users),


}