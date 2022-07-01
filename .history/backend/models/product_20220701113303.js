require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
})

const Product = mongoose.model('Product', productSchema)

mongoose.connect(url)

Product.find({}).then(products => {
  products.forEach(product => {
    console.log(product)
  })
  mongoose.connection.close()
})

module.exports = mongoose.model('Product', productSchema)
