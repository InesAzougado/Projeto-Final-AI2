var Sequelize = require('sequelize');
var sequelize = require('./database');

var equipamentos = sequelize.define('equipamentos',
    {
        id_equipamento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nome_equip: Sequelize.STRING,
        desc: Sequelize.STRING,
        img: Sequelize.STRING,
    },
    { timestamps: false, }
);

module.exports = equipamentos;