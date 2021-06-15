const connect  = require('../../core/connectDatabase');
const {  Users }= require('../schema/index');


console.log('START MIGRATIONS');

const {
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





