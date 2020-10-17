// Definición del servidor

const { request, response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'antojisto APIv1'
  })
})

module.exports = app
