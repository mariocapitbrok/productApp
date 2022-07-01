const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('<h1>Hello express</h1>')
})

const PORT = 3001
app.connect(PORT, () => {
  ;`Server is running on port: ${PORT}`
})
