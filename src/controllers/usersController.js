var sequelize = require('../model/database');
const users = require('../model/users');
const clientes = require('../model/clientes');
const marcacoes = require('../model/marcacoes');
const { QueryTypes } = require('sequelize');

const controllers = {}

sequelize.sync()

/*-------- LOGIN ----------*/

controllers.login = async (req, res) =>{
    var email = req.body.email;
    var pass = req.body.password;
    if( email == "" || pass =="")
    {
        res.json({ success: false, message: 'Tem de preencher os campos!' });
    }
    const login = await sequelize.query("SELECT * FROM users WHERE email='"+email+"' AND pass='"+pass+"'", { type: QueryTypes.SELECT } );


    console.log(login)

    if(login.length != 0)
    {
        res.json({ success: true, data: login, message: 'Login efectuado com sucesso!' });
    }
    else{
        res.json({success: false, data:login, message:'Tem de preencher os campos corretamente!'});
    }
}

module.exports = controllers;