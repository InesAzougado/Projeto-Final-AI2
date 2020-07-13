var Sequelize = require('sequelize');
var sequelize = require('./database');
const users = require('./users');

var marcacoes = sequelize.define('marcacoes',
    {
        id_marcacao: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user: {
            type: Sequelize.INTEGER,
            
            //DIZER A TABELA E COLUNA

            references:{
                model: users,
                key: 'id_user'
            }
        },
        data_marcacao: Sequelize.STRING,
        hora: Sequelize.STRING,
        estado: Sequelize.STRING,
    },
    { timestamps: false, }
);

marcacoes.belongsTo(users)

module.exports = marcacoes;