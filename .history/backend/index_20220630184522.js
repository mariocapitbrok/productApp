const express = require('express')

const app = express()

const PORT = 3001
app.connect(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
