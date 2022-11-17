const express = require('express');

const ProductsService = require('./../services/product.services');


const router = express.Router();

const service = new ProductsService();


router.get('/', (req, res)=>{
  const products = service.find();
  res.json(products)
})

router.get('/filter', (req, res)=>{ //endopoint de foma especifica deben ir antes
  res.send('Yo soy un filter');
})

router.get('/:id', (req, res)=>{
  const { id } = req.params; //destructuring
  const product = service.findOne(id);
  res.json(product)
});

router.post('/', (req, res)=>{
  const  body  = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})


router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'Update',
    data: body,
    id
  });
});

//DELETE
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'Deleted',
    id
  });
});


module.exports = router;
