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
        n_telemovel: Sequelize.STRING,
        id_user: {
            type: Sequelize.INTEGER,

            //Dizer que é uma chave forasteira e dar a ref da tabela e a coluna
            references:{
                model: users,
                key: 'id_user'
            }
        }
        
    },
    { timestamps: false, }
);

module.exports = clientes;