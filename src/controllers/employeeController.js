varEmployee = require('../model/Employee');
var Role = require('../model/Role');
var sequelize = require('../model/database');

const controllers = {}

sequelize.sync()

controllers.list = async (req, res) => {
    const data = await Employee.findAll({
        include: [Role]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ success: true, data: data });
}

module.exports = controllers;