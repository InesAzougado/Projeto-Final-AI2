var sequelize = require('../model/database');
const vernizes = require('../model/vernizes');
const { QueryTypes } = require('sequelize');
const equipamentos = require('../model/equipamentos');
const portefolio = require('../model/portefolio');
const dicas = require('../model/dicas');

const controllers = {}

sequelize.sync()

/*-------- LISTAR VERNIZES ----------*/

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

/*-------- LISTAR EQUIPAMENTOS ----------*/

controllers.listar_equipamentos = async (req, res) => {
    const data = await equipamentos.findAll({
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ sucess: true, data: data });
}

/*-------- LISTAR POTEFOLIO ----------*/

controllers.listar_portefolio = async (req, res) => {
    const data = await portefolio.findAll({
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ sucess: true, data: data });
}

/*-------- LISTAR DICAS ----------*/

controllers.listar_dicas = async (req, res) => {
    const data = await dicas.findAll({
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