const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = require('../model/utilizador');
const sequelize = require('../model/database');
const config = require('../config');

var users = require('../model/utilizador');
var sequelize = require('../model/database');

const controllers = {}

sequelize.sync()

controllers.listausers = async (req, res) => {
    const data = await users.findAll({
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        });
    res.json({ sucess: true, data: data });
}

/* REGISTAR ---------------------- */
controllers.create = async (req, res) => {
    // data
    const { name, email, address, phone, role
    } = req.body;
    // create
    const data = await Employee.create({
        name: name,
        email: email,
        address: address,
        phone: phone,
        roleId: role
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error)
            return error;
        })
    // return res
    res.status(200).json({
        success: true,
        message: "Registado",
        data: data
    });
}

/* BUSCAR para EDITAR ----------------------------------------------- */
controllers.get = async (req, res) => {
    const { id } = req.params;
    const data = await Employee.findAll({
        where: { id: id },
        include: [Role]
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ success: true, data: data });
}

/* EDITAR --------------------------------------------------- */
controllers.update = async (req, res) => {
    // parameter get id
    const { id } = req.params;
    // parameter POST
    const { name, email, address, phone, role } = req.body;
    // Update data
    const data = await Employee.update({
        name: name,
        email: email,
        address: address,
        phone: phone,
        roleId: role
    },
        {
            where: { id: id }
        })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            return error;
        })
    res.json({ success: true, data: data, message: "Updated successful" });
}

controllers.delete = async (req, res) => {
    // parâmetros por post
    const { id } = req.body;
    // delete por sequelize
    const del = await Employee.destroy({
        where: { id: id }
    })
    res.json({ success: true, deleted: del, message: "Deleted successful" });
}

module.exports = controllers;