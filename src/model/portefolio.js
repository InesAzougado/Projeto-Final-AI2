var Sequelize = require('sequelize');
var sequelize = require('./database');

var portefolio = sequelize.define('portefolio',
    {
        id_foto: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        img: Sequelize.STRING,
    },
    { timestamps: false, }
);

module.exports = portefolio;