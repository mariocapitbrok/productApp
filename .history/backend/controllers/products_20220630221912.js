const productsRouter = require('express').Router()

let products = [
  {
    id: '1',
    name: 'Meta Quest 2',
    description: 'Advanced All-In-One Virtual Reality Headset - 128 GB',
    price: 380,
  },
  {
    id: '2',
    name: 'Nintendo Switch',
    description: 'OLED Model w/ White Joy-Con',
    price: 299,
  },
  {
    name: 'Xbox Series S',
    description:
      'includes: Xbox Series S console, one Xbox Wireless Controller, a high-speed HDMI cable, power cable, and 2 AA batteries.',
    price: 279.99,
    id: '3',
  },
]

const generateId = () => {
  maxId =
    products.length > 0 ? Math.max(...products.map(product => product.id)) : 0
  return maxId + 1
}

productsRouter.get('/', (request, response) => {
  response.json(products)
})

productsRouter.post('/', (request, response) => {
  const body = request.body

  const product = {
    id: generateId(),
    name: body.name,
    description: body.description,
    price: body.price,
  }

  products = products.concat(product)

  response.json(products)
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

module.exports = productsRouter
