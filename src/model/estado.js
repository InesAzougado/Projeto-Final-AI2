var Sequelize = require('sequelize');
var sequelize = require('./database');
const marcacoes = require('./marcacoes');

var estado = sequelize.define('estado',
    {
        id_marcacao: {
            type: Sequelize.INTEGER,
            
            //DIZER A TABELA E COLUNA

            references:{
                model: marcacoes,
                key: 'id_marcacao'
            }
        },
        estado: Sequelize.STRING,
    },
    { timestamps: false, }
);

estado.belongsTo(marcacoes)

module.exports = estado;