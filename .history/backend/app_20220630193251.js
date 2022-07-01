const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello express!</h1>')
})

module.exports = app
