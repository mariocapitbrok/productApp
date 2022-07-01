const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello express 2!</h1>')
})

module.exports = app
