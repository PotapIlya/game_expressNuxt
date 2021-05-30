const connect  = require('../../core/connectDatabase');
const {  Users, AuthToken, Rooms } = require('../schema/index');


console.log('START MIGRATIONS');

AuthToken.belongsTo(Users);

Rooms.hasOne(Users);



connect.sequelize.sync({force:true}).then(()=>
{
    console.log("Tables have been created\n");
    console.log('END MIGRATIONS\n');
})
    .catch(err=>{
        console.log(err)
    });





