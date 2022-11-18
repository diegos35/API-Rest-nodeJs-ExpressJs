const express = require('express');
const faker = require('faker');
const routerApi = require('./routes/');

const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json()); //middleware para recibir body

routerApi(app); //le pasamos la aplicación

app.use(logErrors);
app.use(errorHandler);

/* app.get('/', (req, res)=>{
  res.send('Hola mi server en express')
})

app.get('/new-route', (req, res)=>{
  res.send('Hola, soy nueva ruta')
})
 */



app.listen(port, () =>{
  console.log('listening'+ port);
});
