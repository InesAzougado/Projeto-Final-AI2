var Sequelize = require('sequelize');
var sequelize = require('./database');
const users = require('./users');

var clientes = sequelize.define('clientes',
    {
        id_cliente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        id_user: {
            type: Sequelize.INTEGER,
            
            //DIZER A TABELA E COLUNA

            references:{
                model: users,
                key: 'id'
            }
        },
        nome: Sequelize.STRING,
        n_telemovel: Sequelize.INTEGER,
    },
    { timestamps: false, }
);

clientes.belongsTo(users)

module.exports = clientes;