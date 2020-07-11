var Sequelize = require('sequelize');
var sequelize = require('./database');

var vernizes = sequelize.define('vernizes',
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

module.exports = vernizes;