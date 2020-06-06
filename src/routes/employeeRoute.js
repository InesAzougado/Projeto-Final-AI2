const express = require('express');
const router = express.Router();
//importer os controladores [2]
const employeeController = require('../controllers/employeeController');

//router.get('/test', employeeController.test);

//router.get('/testdata',employeeController.testdata);

router.get('/list',employeeController.list);

module.exports = router;