var Sequelize = require('sequelize');
var sequelize = require('./database');

var users = sequelize.define('users',
    {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: Sequelize.STRING,
        pass: Sequelize.STRING,
        tipo: Sequelize.CHAR,
        nome: Sequelize.CHAR,
        telemovel: Sequelize.CHAR,
    },
    { timestamps: false, }
);

module.exports = users;