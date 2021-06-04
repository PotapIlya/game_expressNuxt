const { Sequelize, DataTypes, Model }  = require('sequelize');
const config = require('./../../config/database');
const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');

const { Room, User, AuthToken } = require('../schema/index');
console.log('START SEEDERS');


bcrypt.hash('testertester', 10, (err, hash) =>
{
    User.create({
        name:"tester",
        password: hash,
    }).then(user =>
    {
        AuthToken.create({
            UserId: user.id,
            token: 'CypDboBbQHo3jcT'
        }).catch(err=>console.log(err));

        Room.create({
            UserId: user.id,
            name: 'room_'+user.id,
        })

    }).catch(err=>console.log(err));
});


console.log('END SEEDERS');
