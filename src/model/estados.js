/*var Sequelize = require('sequelize');
var sequelize = require('./database');
const marcacoes = require('./marcacoes');

var estados = sequelize.define('estados',
    {
        d_marcacao: {
            type: Sequelize.INTEGER,
            
            //DIZER A TABELA E COLUNA

            references:{
                model: marcacoes,
                key: 'id_marcacao'
            }
        },
        estados: Sequelize.STRING,
    },
    { timestamps: false, }
);

estados.belongsTo(marcacoes)

module.exports = estados;*/