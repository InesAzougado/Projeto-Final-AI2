var Sequelize = require('sequelize');
var sequelize = require('./database');
//importar o modelo - chave forasteira roleID
var Role = ('./Role');

var Employee = sequelize.define('employee', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.BIGINT,
    roleId: {
        type: Sequelize.INTEGER,
        //referência a outro modelo
        references: {
            model: Role,
            key: 'id'
        }
    },
    timestamps: false,
});
Employee.belongsTo(Role)
module.exports = Employee