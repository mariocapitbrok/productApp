require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('Connecting to MongoDB')
mongoose
  .connect(url)
  .then(connectionDetails => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
})

const Product = mongoose.model('Product', productSchema)

Product.find({}).then(products => {
  products.forEach(product => {
    console.log(product)
  })
  mongoose.connection.close()
})

module.exports = mongoose.model('Product', productSchema)
