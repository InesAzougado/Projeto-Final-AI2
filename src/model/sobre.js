var Sequelize = require('sequelize');
var sequelize = require('./database');

var sobre = sequelize.define('sobre',
    {
        id_sobre: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        desc: Sequelize.STRING,
        img: Sequelize.STRING,
    },
    { timestamps: false, }
);

module.exports = sobre;