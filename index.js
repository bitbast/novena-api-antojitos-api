// Este archivo se encarga de levantar todos los servicios

// el dotenv debe ser la primer linea en ejecutarse
require('dotenv').config()

// equivalente
// const dotenv = require(dotenv)
// dotenv.config()

const db = require('./src/lib/db') // gusrada el objeto que tiene el métod connect del archivo db.js
const server = require('./src/server')

const { PORT = 3030 } = process.env

db.connect() // db es el objeto y connect es la función
  .then(() => {
    console.log('DB connected')
    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  })
  .catch(error => {
    console.error('DB ERROR: ', error)
  })
