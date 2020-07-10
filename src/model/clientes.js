var Sequelize = require('sequelize');
var sequelize = require('./database');

var clientes = sequelize.define('clientes',
    {
        id_cliente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nome: Sequelize.STRING,
    },
    { timestamps: false, }
);

module.exports = clientes;