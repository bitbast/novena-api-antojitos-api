// Este archivo define la función para conectarnos a la base de datos

const mongoose = require('mongoose')

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

// protocolo://user:password@host/dbName
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
  // regresa la promesa de connect
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
}

module.exports = {
  connect // Es igual a connect: connect
}
