const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  )
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://trackstar:${password}@cluster0.18ikmbc.mongodb.net/?retryWrites=true&w=majority`

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
})

const Product = mongoose.model('Product', productSchema)

/* mongoose
  .connect(url)
  .then(result => {
    console.log('connected')

    const product = new Product({
      name: 'Wireless Controller Keyboard for PS5',
      description:
        'Bluetooth 3.0 Mini Portable Gamepad Chatpad with Built-in Speaker & 3.5MM Audio Jack for Playstation 5 Voice Chat Board for Messaging and Gaming Live Chat',
      price: 26.99,
    })

    return product.save()
  })
  .then(() => {
    console.log('product saved!')
    return mongoose.connection.close()
  })
  .catch(err => console.log(err)) */

mongoose.connect(url)

Product.find({}).then(products => {
  products.forEach(product => {
    console.log(product)
  })
  mongoose.connection.close()
})
