var Sequelize = require('sequelize');
var sequelize = require('./database');

var varnizes = sequelize.define('varnizes',
    {
        id_vernis: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nome_cor: Sequelize.STRING,
        ref: Sequelize.STRING,
        img: Sequelize.STRING,
    },
    { timestamps: false, }
);

module.exports = varnizes;