const express = require('express');
const app = express();
// importação de rotas [1]
const usersRoute = require('./routes/usersRoute.js');
const bodyParser = require('body-parser');

// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

//Configurações
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Rota principal
app.use('/users', usersRoute);

app.use('/', (req, res) => {
    res.send("Hello World");
});


//app.use('/login', loginRoute);

app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'));
});