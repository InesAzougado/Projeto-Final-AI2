const express = require('express');
const router = express.Router();
//importer os controladores [2]
const usersRoute = require('../controllers/usersController');

/*-------- CRIAÇÃO DAS ROTAS RELATIVAS AOS UTILIZADORES ----------*/

router.post('/login', usersRoute.login)

module.exports = router;