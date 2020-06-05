const express = require('express');
const router = express.Router();
//importar os controladores [2]
const employeeController = require('../controllers/employeeController');

router.get('/test',employeeController.test); // -> teste é o nome da rota a importar

router.get('/save', (req,res) => {
    res.json({status: 'Employeed Saved'}); // -> Mensagem de confimação!
});

router.get('/testdata',employeeController.testdata);

router.get('/list',employeeController.list);

module.exports = router;
