import React from 'react';
import logo from './logo.svg';
import './App.css';

const express=require('express');
const app=express();
//Configurações
app.set('port', process.env.PORT||3000);
//Middlewares
app.use(express.json());
//Rotas
app.use('/teste',(req,res)=>{
  res.send("Rota TESTE.");
});
app.use('/',(req,res)=>{
  res.send("Hello World");
});
app.listen(app.get('port'),()=>{
  console.log("Start server on port " + app.get('port'))
})

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
