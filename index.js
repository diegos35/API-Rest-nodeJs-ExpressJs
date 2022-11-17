const express = require('express');
const faker = require('faker');
const routerApi = require('./routes/');

const app = express();
const port = 3000;

routerApi(app); //le pasamos la aplicación



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
