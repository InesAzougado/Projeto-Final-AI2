const express = require('express');
const router = express.Router();
//importer os controladores [2]
const usersRoute = require('../controllers/usersController');
const vernizesRoute = require('../controllers/vernizesController');


/*-------- CRIAÇÃO DAS ROTAS RELATIVAS AOS UTILIZADORES ----------*/

router.post('/login', usersRoute.login)

router.get('/listar_vernizes', vernizesRoute.listar_vernizes)

module.exports = router;