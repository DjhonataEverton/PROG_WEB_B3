
const express = require('express')
const session = require('express-session')
const app = express()
const port = 80
//const { getUsuarios } = require("./models/crud")
const routes = require('./routes')


// Define a pasta onde irão ficar as views 
app.set("views", __dirname + "/views");
// Define o template engine usado nas views 
app.set("view engine", "ejs");
// Define a pasta public para conteúdo estático 
app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'dieidinxnenanaun',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

app.use(routes);

//Inicia Servidor 
app.listen(port, () => {
  console.log('Servidor iniciado')
})

