var Sequelize = require('sequelize');
var sequelize = require('./database');

var dicas = sequelize.define('dicas',
    {
        id_dica: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nome_dica: Sequelize.STRING,
        desc: Sequelize.STRING,
        img: Sequelize.STRING,
    },
    { timestamps: false, }
);

module.exports = dicas;