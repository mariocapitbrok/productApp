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

module.exports = productsRouter
