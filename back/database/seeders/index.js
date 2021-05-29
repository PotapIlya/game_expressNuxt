const { Sequelize, DataTypes, Model }  = require('sequelize');
const config = require('./../../config/database');
const connect = require('../../core/connectDatabase');
const bcrypt = require('bcrypt');

const { Team, Person, Users, AuthToken } = require('../schema/index');
console.log('START SEEDERS');


Team.create({
    name: "Navi"
}).then(res=>
{
    const teamId = res.id;

    Person.create({
        name:"Potap",
        steam_id: Math.floor(Math.random() * 100),
        TeamId: teamId
    }).catch(err=>console.log(err));

    Person.create({
        name:"Potap",
        steam_id: Math.floor(Math.random() * 100),
        TeamId: teamId
    }).catch(err=>console.log(err));


}).catch(err=>console.log(err));


bcrypt.hash('testertester', 10, (err, hash) =>
{
    Users.create({
        email:"tester",
        password: hash,
    }).then(user => {
        AuthToken.create({
            UserId: user.id,
            token: '123'
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));
});

console.log('END SEEDERS');
