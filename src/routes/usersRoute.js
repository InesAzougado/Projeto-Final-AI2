const express = require('express');
const router = express.Router();
//importer os controladores [2]
const usersRoute = require('../controllers/usersController');
const vernizesRoute = require('../controllers/vernizesController');


/*-------- CRIAÇÃO DAS ROTAS RELATIVAS AOS UTILIZADORES ----------*/

router.post('/login', usersRoute.login)

router.post('/add_marcacao', usersRoute.add_marcacao)

router.post('/add_user', usersRoute.add_user)

router.get('/listar_vernizes', vernizesRoute.listar_vernizes)

router.get('/listar_equipamentos', vernizesRoute.listar_equipamentos)

router.get('/listar_portefolio', vernizesRoute.listar_portefolio)

router.get('/listar_dicas', vernizesRoute.listar_dicas)

router.get('/listar_sobre', vernizesRoute.listar_sobre)

module.exports = router;