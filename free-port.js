// Esta función te permite encontrar un puerto libre en tu sistema operativo
// En caso de que por ejemplo el 3000 esté ocupado
const net = require('node:net')

function findAvailablePort (desirePort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desirePort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', err => {
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
