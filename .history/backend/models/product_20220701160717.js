const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  description: {
    type: String,
    minLength: 5,
    maxLength: 1000,
    required: true,
  },
  price: {
    type: Number,
    min: 1,
    max: 20000,
    precision: 2,
    required: true,
  },
})

productSchema.set('toJSON', {
  transform: (document, product) => {
    product.id = product._id.toString()
    delete product._id
    delete product.__v
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
