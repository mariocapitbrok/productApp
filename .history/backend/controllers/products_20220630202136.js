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

productsRouter.get('/:id', (request, respone) => {
  const id = request.params.id
  const product = products.find(product => product.id === id)

  if (product) {
    console.log(product)
    response.json(product)
  } else {
    response.status(404).end()
  }
})

module.exports = productsRouter
