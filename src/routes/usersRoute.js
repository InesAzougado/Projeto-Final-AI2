const express = require('express');
const router = express.Router();
//importer os controladores [2]
const usersRoute = require('../controllers/usersController');
const vernizesRoute = require('../controllers/vernizesController');


/*-------- CRIAÇÃO DAS ROTAS RELATIVAS AOS UTILIZADORES ----------*/

router.post('/login', usersRoute.login)

router.get('/listar_vernizes', vernizesRoute.listar_vernizes)

router.get('/listar_equipamentos', vernizesRoute.listar_equipamentos)

router.get('/listar_portefolio', vernizesRoute.listar_portefolio)

module.exports = router;