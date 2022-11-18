const express = require('express');

const ProductsService = require('./../services/product.services');


const router = express.Router();

const service = new ProductsService();


router.get('/', async (req, res)=>{
  const productsService = await ProductsService.getInstance();
  const products = await productsService.find();
  res.json(products);
})

router.get('/filter', (req, res)=>{ //endopoint de foma especifica deben ir antes
  res.send('Yo soy un filter');
})

router.get('/:id', async (req, res)=>{
  const productsService = await ProductsService.getInstance();
  const { id } = req.params;
  const product = await productsService.findOne(id);

  res.json(product);
});

router.post('/', async(req, res)=>{
  const  body  = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct)
})


router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json(product);
});

//DELETE
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports = router;
