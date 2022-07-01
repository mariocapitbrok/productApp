require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
})

module.exports = mongoose.model('Product', productSchema)
