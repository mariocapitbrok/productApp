const productsRouter = require('express').Router()
const Product = require('../models/product')

productsRouter.get('/', async (request, response) => {
  const products = await Product.find({})
  response.json(products)
})

productsRouter.post('/', async (request, response) => {
  const body = request.body

  const product = new Product({
    name: body.name,
    description: body.description,
    price: body.price,
  })

  const savedProduct = await product.save()

  response.status(201).json(savedProduct)
})

productsRouter.get('/:id', async (request, response) => {
  const id = request.params.id
  const product = await Product.findById(id)

  if (product) {
    response.json(product)
  } else {
    response.status(404).end()
  }
})

productsRouter.put('/:id', async (request, response) => {
  const id = request.params.id
  const body = request.body

  const newProduct = {
    name: body.name,
    description: body.description,
    price: body.price,
  }

  const updatedProduct = await Product.findByIdAndUpdate(id, newProduct, {
    new: true,
    runValidators: true,
    context: 'query',
  })
  response.json(updatedProduct)
})

productsRouter.delete('/:id', (request, response) => {
  const id = request.params.id
  products = products.filter(product => product.id !== id)
  response.status(204).end()
})

module.exports = productsRouter
