const { Sequelize, DataTypes, Model }  = require('sequelize');
const connect = require('../../core/connectDatabase');


module.exports = {

    Team: connect.sequelize.define('Team', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),


    Person: connect.sequelize.define('Person', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        TeamId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        steam_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),


    Users: connect.sequelize.define('Users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true
    }),

    AuthToken: connect.sequelize.define('AuthToken', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        UserId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true
    }),

};

