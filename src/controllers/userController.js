const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/utilizador');
const sequelize = require('../model/database');
const config = require('../config');
const controllers = {}

var users = require('../model/utilizador');
var sequelize = require('../model/database');

sequelize.sync();

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

controllers.register = async (req, res) => {
    const { n_cliente, pass } = req.body;
    const data = await userertyuaswert.create({
        n_cliente: n_cliente,
        pass: pass
    }).then(function (data) {
        return data;
    })
        .catch(error => {
            console.log("Erro: " + error);
            return error;
        })
    res.status(200).json({
        success: true,
        message: "Registado",
        data: data
    });
}

controllers.login = async (req, res) => {
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
    }
    var user = await User.findOne({ where: { email: email } })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error); return error;
        })
    if (password === null || typeof password === "undefined") {
        res.status(403).json({
            success: false,
            message: 'Campos em Branco'
        });
    } else {
        if (req.body.n_cliente && req.body.pass && user) {
            const isMatch = bcrypt.compareSync(pass, user.pass); if (req.body.n_cliente === user.n_cliente && isMatch) {
                let token = jwt.sign({ n_cliente: req.body.n_cliente }, config.secret, {
                    expiresIn: '1h' //expira em 1 hora
                });
                res.json({
                    success: true, message: 'Autenticação realizada com sucesso!', token: token
                });
            } else {
                res.status(403).json({
                    success: false, message: 'Dados de autenticação inválidos.'
                });
            }
        } else {
            res.status(400).json({
                success: false, message: 'Erro no processo de autenticação.Tente de novo mais tarde.'
            });
        }
    }
}

module.exports = controllers;