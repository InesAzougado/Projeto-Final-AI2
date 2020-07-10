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
        nome: Sequelize.STRING,
        n_telemovel: Sequelize.INTEGER,
        id_user: {
            type: Sequelize.INTEGER,
            
            // DIZER TABELA E COLUNA DA FK!!!
            references: {
                model: users,
                key: 'id_user'
            }
        }
    },
    { timestamps: false, }
);

clientes.belongsTo(users);

module.exports = clientes;