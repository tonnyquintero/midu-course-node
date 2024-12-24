const path = require('node:path')

// Barra separadora de carpetas según SO
console.log(path.sep) // Windows: \, Linux y Mac: /

// Unir rutas con path.join
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// Obtener el nombre del archivo
const base = path.basename('/tmp/tonys-files/password.txt')
console.log(base)

// Obtener el nombre del archivo sin la extensión
const filename = path.basename('/tmp/tonys-files/password.pdf', '.pdf')
console.log(filename)

// Obtener la extensión del archivo
const extension = path.extname('my-image.jpeg')
console.log(extension)
