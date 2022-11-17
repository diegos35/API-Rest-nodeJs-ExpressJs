const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res)=>{
  res.send('Hola mi server en express')
})

app.get('/new-route', (req, res)=>{
  res.send('Hola, soy nueva ruta')
})

app.get('/productos', (req, res)=>{
  res.json({
    name: 'Diego',
    price: 10000
  })
})

app.listen(port, () =>{
  console.log('listening'+ port);
});
