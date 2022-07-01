const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello express!</h1>')
})

const PORT = 3001
app.listen(PORT, () => {
  ;`Server is running on port: ${PORT}`
})

module.exports = app
