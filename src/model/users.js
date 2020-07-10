var express = require('express');
var session = require('express-session');
var router = express.router();
const multer = require("multer");
const uuidv4 = require('uuidv4/v4');
const path = require('path');
//var mysql = require('mysql');
var pg = require('pg');
const format = require('pg-format');
var md5 = require('md5');
const bodyParser = require('body-parser');
var jwt = require('jasonwebtoken');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var conectBD = "postgres://postgres:ines2302@localhost:5432/insnails";

var connection = new pg.Client(conectBD);

connection.connect();

router.post('/', function (req, res, next) {

    var id = req.body.NCliente;
    var id2 = md5(req.body.Pass + "abc");
    sess = req.session;
    sess.ncliente = req.body.NCliente;
    var secret = 'password secreta';

    connection.query('SELECT * FROM users WHERE n_cliente= $1 and pass= $2', [id, id2], function (error, results, fields) {
        if (error) throw error;

        var numelinhas = results.rowCount;
        if (numelinhas > 0) {
            var user = results.rows[0]['id_user']
            session.id_user = user;

            const id = "O login foi efetuado com sucesso!"
            var token = jwt.sign({ id }, secret, {
                expiresIn: 300
            });

            return res.status(200).send({ auth: true, token: token });
        }

        else {
            var token = jwt.sign({ id }, secret, {
                expiresIn: 300
            });

            return res.status(200).send({ auth: false, token: " " });

        }
    });
})