var Employee = require('../model/Employee');
var Role = require('../model/Role');
var sequelize = require('../model/database');

const controller = {}

sequelize.sync()

controller.test = (req,res) => {
    const data = {
        name: "Nuno Costa",
        age: "42",
        city: "Viseu"
    }

    console.log("Envio de dados do Controller EMPLOYEE.");
    res.json(data);
};

controller.testdata = async (req,res) => {
    const response = await sequelize.sync().then(function() {
        /* APAGAR APÓS A 1ª EXECUÇÃO */
        //Cria Role
        Role.creat({
            role: 'Admin'
        });
        //Cria employee
        Employee.creat({
            name: 'Nuno Costa',
            email: 'ncosta@estgv.ipv.pt',
            phone: '232983142',
            roleId: 1
        });
        //Cria employee
        Employee.creat({
            name: 'Ines Azougado',
            email: 'inessousa898@gmail.com',
            phone: '232983142',
            roleId: 1
        });
        // APAGAR ATÉ AQUI
        const data = Employee.findAll()
        return data;
    })
    .catch(err => {
        return err;
    });
    res.json(response)
}

controller.list = async (req,res) => {
    const data = await Employee.findAll();
    res.json(data)
}

module.exports = controller;