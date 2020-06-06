var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'isaNails',
    'postgres',
    'ines2302',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    }
);

module.exports = sequelize;