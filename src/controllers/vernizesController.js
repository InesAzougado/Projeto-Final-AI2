var sequelize = require('../model/database');
const vernizes = require('../model/vernizes');
const { QueryTypes } = require('sequelize');

const controllers = {}

sequelize.sync()

controllers.listar_vernizes = async (req, res) => {
    const data = await vernizes.findAll({
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ sucess: true, data: data });
}

module.exports = controllers;