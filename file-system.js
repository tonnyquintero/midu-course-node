const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, // tamaño del archivo
);

const text = fs.readFileSync('./archivo.txt', 'utf-8'); 

console.log(text);

