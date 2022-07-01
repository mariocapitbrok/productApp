const express = require('express')

const app = express()

const PORT = 3001
app.connect(PORT, () => {
  ;`Server is running on port: ${PORT}`
})
