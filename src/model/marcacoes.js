var Sequelize = require('sequelize');
var sequelize = require('./database');
//const clientes = require('./clientes');

var marcacoes = sequelize.define('marcacoes',
    {
        id_marcacao: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        /*id_cliente: {
            type: Sequelize.INTEGER,
            
            //DIZER A TABELA E COLUNA

            references:{
                model: clientes,
                key: 'id_cliente'
            }
        },*/
        data: Sequelize.DATE,
        hora: Sequelize.STRING,
    },
    { timestamps: false, }
);

//marcacoes.belongsTo(clientes)

module.exports = marcacoes;