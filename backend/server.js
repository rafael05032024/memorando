const jsonServer = require('json-server')
const bodyParser = require('body-parser')

const server = jsonServer.create()
const router = jsonServer.router('./db.json')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use(router)

server.listen(3000, '0.0.0.0', () => {
  console.log("API disponível em http://localhost:3000")
})
