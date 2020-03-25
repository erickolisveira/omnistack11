const express = require('express')

const routes = express.Router()

routes.use('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = routes;