const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res)=>{
  res.send('Hola mi server en express')
})

app.get('/new-route', (req, res)=>{
  res.send('Hola, soy nueva ruta')
})

app.get('/products', (req, res)=>{
  res.json([
    {
      name: 'Product 1',
      price: 10000
    },
    {
      name: 'Product 2',
      price: 20000
    }
  ])
})

app.get('/products/:id', (req, res)=>{
  const { id } = req.params; //destructuring
  res.json({
    id,
    name: 'Product6',
    price: 10000
  })
});

app.listen(port, () =>{
  console.log('listening'+ port);
});
