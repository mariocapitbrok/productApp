const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('Hello express')
})

const PORT = 3001
app.connect(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
