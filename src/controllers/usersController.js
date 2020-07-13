var sequelize = require('../model/database');
const users = require('../model/users');
const marcacoes = require('../model/marcacoes');
const vernizes = require('../model/vernizes');
const equipamentos = require('../model/equipamentos');
const portefolio = require('../model/portefolio');
const dicas = require('../model/dicas');
const sobre = require('../model/sobre');
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

/*-------- ADICIONAR MARCACAO ----------*/

controllers.add_marcacao = async (req, res) => {
    const { data_marcacao, hora, estado} = req.body;
    let data;
    const response = await sequelize.sync().then(function () {  
        marcacoes.create({
            data_marcacao: data_marcacao,
            hora: hora,
            estado: estado,
        });
        const data = marcacoes.findAll();
        return data;
    })
        .catch(err => {
            return err;
        });
    res.json({ sucess: true, data: data, message: "Marcacao solicitada com sucesso!!" });
}

/*-------- ADICIONAR USER ----------*/

controllers.add_user = async (req, res) => {
    const { email, pass, tipo, nome, telemovel} = req.body;
    let data2;
    const response = await sequelize.sync().then(function () {  
        users.create({
            email: email,
            pass: pass,
            tipo: tipo,
            nome: nome,
            telemovel: telemovel,
        });
        const data2 = users.findAll();
        return data2;
    })
        .catch(err => {
            return err;
        });
    res.json({ sucess: true, data2: data2, message: "Marcacao solicitada com sucesso!!" });
}

module.exports = controllers;