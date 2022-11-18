const faker = require('faker');

class ProductsService {
  static _productsServiceInstance = null;

  static getInstance() {
    if (ProductsService._productsServiceInstance === null) {
      ProductsService._productsServiceInstance = new ProductsService();
    }
    return ProductsService._productsServiceInstance;
  }

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let i= 0; i < limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
  }

  create(){
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct;
  }

  find(){
    return new Promise((resolve, reject)=>{
      setTimeout (()=>{
        resolve(this.products);
      },5000)
    })
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }

  update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) throw new Error("product not found")

    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  delete(){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) throw new Error("product not found")

    this.products.splice(index, 1);
    return { id }
  }

}

module.exports = ProductsService;
