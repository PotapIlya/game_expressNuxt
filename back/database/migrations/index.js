const connect  = require('../../core/connectDatabase');
const {  Users, AuthToken } = require('../schema/index');


console.log('START MIGRATIONS');

AuthToken.belongsTo(Users);



connect.sequelize.sync({force:true}).then(()=>
{
    console.log("Tables have been created\n");
    console.log('END MIGRATIONS\n');
})
    .catch(err=>{
        console.log(err)
    });





