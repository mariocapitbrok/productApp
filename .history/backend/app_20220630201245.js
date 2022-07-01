const express = require('express')
const cors = require('cors')
const productsRouter = require('./controllers/products')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products', productsRouter)

module.exports = app
