const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const productsRouter = require('./controllers/products')

const app = express()

console.log('Connecting to MongoDB')
mongoose
  .connect(config.MONGODB_URI)
  .then(connectionDetails => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/', express.static('build'))
app.use('/products', express.static('build'))
app.use('/api/products', productsRouter)

module.exports = app
