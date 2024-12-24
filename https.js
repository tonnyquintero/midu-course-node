const http = require('node:http')
const { findAvailablePort } = require('./free-port')

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hello World')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`)
  })
})

// Cuando colocas el número 0 el sistema operativo asigna un puerto libre
// en lugar de asignar un puerto fijo
