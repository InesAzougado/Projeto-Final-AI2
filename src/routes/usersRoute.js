const express = require('express');
const router = express.Router();
//importer os controladores [2]
const usersRoute = require('../controllers/usersController');

router.get('/listar',usersRoute.listausers);

router.post('/create',usersRoute.create);

router.get('/get/:id',usersRoute.get);

router.post('/update/:id', usersRoute.update);

router.post('/delete', usersRoute.delete);

router.post('/login', usersRoute.login)

module.exports = router;