// CommonJS Module
// const http = require('http')
// const { sum, difference } = require('./modules/calculation.js')

// ES6 Module
import http from 'http'
import { sum, difference } from './modules/calculation.js'

const server = http.createServer((req, res) => {
  console.log(sum(2, 3))
  console.log(difference(10, 5))
  res.end('BACKEND :)')
})

server.listen(3000)