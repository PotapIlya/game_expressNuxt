const { Sequelize, DataTypes, Model }  = require('sequelize');
const config = require('./../../config/database');

const connect  = require('../../core/connectDatabase');

const { Team, Person, Users, AuthToken } = require('../schema/index');


console.log('START MIGRATIONS');

Team.hasOne(Person);
Person.belongsTo(Team);


AuthToken.belongsTo(Users);



connect.sequelize.sync({force:true}).then(()=>
{
    console.log("Tables have been created\n");
    console.log('END MIGRATIONS\n');
}).catch(err=>console.log(err));





