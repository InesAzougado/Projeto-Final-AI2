const express = require('express');
const app = express();
// importação de rotas [1]
const employeeRouters = require('./routes/employeeRoute.js');

//Configurações
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rota
app.use('/isanails',employeeRouters);

//Rotas
app.use('/teste', (req, res) => {
    res.send("Rota TESTE.");
});

app.use('/', (req, res) => {
    res.send("Hello World");
});

app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'));
});