const express = require('express');
const app = express();
//importação de rotas [2]
const employeeRouters = require('./routes/employeeRoute.js');

//Configurações
app.set('port',process.env.PORT||3000);

//Middlewares
app.use(express.json());

//Rotas -> criar uma por secção!
app.use('/teste',(req,res)=>{
    res.send("Rota TESTE.");
});

//Rota da Raiz do Projeto
app.use('/',(req,res)=>{
    res.send("Hello World");
});

//Rota de employee
app.use('/employee', employeeRouters);

app.listen(app.get('port'),()=>{
    console.log("Start server on port " + app.get('port'));
})
