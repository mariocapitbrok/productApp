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

productsRouter.get('/:id', (request, response) => {
  const id = request.params.id
  const product = products.find(product => product.id === id)

  if (product) {
    response.json(product)
  } else {
    response.status(404).end()
  }
})

productsRouter.put('/:id', (request, response) => {
  const id = request.params.id
  const oldProduct = products.find(product => product.id === id)

  if (oldProduct) {
    const body = request.body
    const newProduct = {
      name: body.name,
      description: body.description,
      price: body.price,
    }

    const updatedProduct = { ...oldProduct, ...newProduct }

    products = products.map(product =>
      product.id === id ? updatedProduct : product
    )

    response.json(updatedProduct)
  } else {
    response.status(404).end()
  }
})

productsRouter.delete('/:id', (request, response) => {
  const id = request.params.id
  products = products.filter(product => product.id !== id)
  response.status(204).end()
})

module.exports = productsRouter
