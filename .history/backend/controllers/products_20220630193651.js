const productsRouter = require('express').Router()

let products = [
  {
    id: '1',
    name: 'Unique string from 3 to 100 characters',
    description:
      'Description string between 5 and 1000 characters and price must be a number between 1 and 20,000 with 2 decimal place precision.',
    price: 5000,
  },
  {
    id: '2',
    name: 'aaa',
    description:
      'Description string between 5 and 1000 characters and price must be a number between 1 and 20,000 with 2 decimal place precision.',
    price: 5000,
  },
  {
    name: 'bbb',
    description:
      'Description string between 5 and 1000 characters and price must be a number between 1 and 20,000 with 2 decimal place precision.',
    price: 5001,
    id: '3',
  },
]

module.exports = productsRouter
