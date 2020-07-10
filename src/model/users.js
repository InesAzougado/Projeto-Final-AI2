var Sequelize = require('sequelize');
var sequelize = require('./database');

var users = sequelize.define('users',
    {
        id_user: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        email: Sequelize.STRING,
        pass: Sequelize.STRING,
        tipo: Sequelize.CHAR,
    },
    { timestamps: false, }
);
users.beforeCreate((users, options) => {
    return bcrypt.hash(users.pass, 10).then(hash => {
        users.pass = hash;
    })
        .catch(err => {
            throw new Error();
        });
});

module.exports = users;