const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;


app.get('/', (req, res)=>{
  res.send('Hola mi server en express')
})

app.get('/new-route', (req, res)=>{
  res.send('Hola, soy nueva ruta')
})

app.get('/products', (req, res)=>{
  const products = [];
  const { size } = req.query
  const limit = size || 10;
  for (let i= 0; i < limit; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

app.get('/products/filter', (req, res)=>{ //endopoint de foma especifica deben ir antes
  res.send('Yo soy un filter');
})

app.get('/products/:id', (req, res)=>{
  const { id } = req.params; //destructuring
  res.json({
    id,
    name: 'Product6',
    price: 10000
  })
});

app.get('/users/', (req, res) => {
  const { limit, offset } = req.query; //parametro tipo query opcional
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  }
    else {
      res.send('No hay parametros');
    }
  }
)


app.listen(port, () =>{
  console.log('listening'+ port);
});
