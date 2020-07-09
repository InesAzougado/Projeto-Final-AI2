const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
//importer os controladores [2]
const employeeController = require('../controllers/employeeController');

router.get('/listar',employeeController.listausers);

router.post('/create',employeeController.create);

router.get('/get/:id',employeeController.get);

router.post('/update/:id', employeeController.update);

router.post('/delete', employeeController.delete);

router.get('/list', middleware.checkToken, userController.list);

router.post('/register',userController.register);

router.post('/login',userController.login);

module.exports = router;