var Employee = require('../model/Employee');
var Role = require('../model/Role');
var sequelize = require('../model/database');

const controllers = {}

sequelize.sync();

const controller = {}

controller.test = (req, res) => {
    const data = {
        name: "Nuno Costa",
        age: 42,
        city: 'Viseu'
    };

    console.log("Envio de dados do Controlador EMPLOYEE.");
    res.json(data);
};

controllers.testdata = async (req, res) => {
    const response = await sequelize.sync().then(function () {
        /** APAGAR após a primeira EXECUÇÃO */
        //Cria Role
        Role.create({
        role: 'Admin'
        });
        // Cria employee
        Employee.create({
        name: 'Nuno Costa',
        email: 'ncosta@estgv.ipv.pt',
        address: 'Campus Politécnico, Viseu, Portugal',
        phone: '232480533',
        roleId:1
        });
        Employee.create({
        name: 'Sousa Marques',
        email: 'marquesousa@nop.pt',
        address: 'Rua da Missa, Lisboa, Portugal',
        phone: '221485543',
        roleId:1
        });
        
        const data = Employee.findAll()
        return data;
    })
        .catch(err => {
            return err;
        });
    res.json(response)
}

controllers.list = async (req, res) => {
    const data = await Employee.findAll();
    res.json(data)
}

module.exports = controller;