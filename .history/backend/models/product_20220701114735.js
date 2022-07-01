require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
})

const Product = mongoose.model('Product', productSchema)

console.log('Connecting to MongoDB')
mongoose
  .connect(url)
  .then(result => {
    console.log('Connected to MongoDB', result)
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

Product.find({}).then(products => {
  products.forEach(product => {
    console.log(product)
  })
  mongoose.connection.close()
})

module.exports = mongoose.model('Product', productSchema)
