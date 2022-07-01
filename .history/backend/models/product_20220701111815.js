const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
const PORT = process.env.PORT

console.log('Connecting to', url, PORT)
