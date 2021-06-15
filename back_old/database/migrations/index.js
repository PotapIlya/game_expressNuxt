const connect  = require('../../core/connectDatabase');
const {  User, AuthToken, Room } = require('../schema/index');


console.log('START MIGRATIONS');

const { belongToManyRoomUser,
    belongToManyUserRoom,
    hasOneUserRoom,
    belongsToAuthTokenUser
} = require('../schema/connections')

connect.sequelize.sync({force:true}).then(()=>
{
    console.log("Tables have been created\n");
    console.log('END MIGRATIONS\n');
})
.catch(err=>{
    console.log(err)
});





