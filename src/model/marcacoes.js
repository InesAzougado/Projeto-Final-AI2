var Sequelize = require('sequelize');
var sequelize = require('./database');
const clientes = require('./clientes');

var marcacoes = sequelize.define('marcacoes',
    {
        id_marcacao: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_cliente: {
            type: Sequelize.INTEGER,
            
            //DIZER A TABELA E COLUNA

            references:{
                model: clientes,
                key: 'id_cliente'
            }
        },
        data_marcacao: Sequelize.STRING,
        hora: Sequelize.STRING,
    },
    { timestamps: false, }
);

marcacoes.belongsTo(clientes)

module.exports = marcacoes;