const express = require('express')
const app = express()


app.set('view engine', 'pug'); // Especifico el motor de plantillas
app.set('views','./views'); // Preguntar si es palabra reservada.************************

app.use(express.json()); // Para habilitar envio de JSON al servidor

app.use(express.static('public')); // Para habilitar el acceso a archivos estaticos
 
app.get('/', function (req, res) {
  res.send('Estas en /')
})

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/quienessomos', function (req, res) {
  res.render('quienessomos')
})

app.get('/dondeEstamos', function (req, res) {
  res.render('dondeestamos')
})

app.get('/queHacemos', function (req, res) {
  res.render('quehacemos')
})


//***********Rutas************

app.listen(3000)