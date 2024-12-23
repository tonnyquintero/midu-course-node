// Aqui lo vamos a hacer de manera asincrona con async await

const { log } = require('node:console');
const fs = require('node:fs/promises');

// IIFE inmediatly invoked function expression

(
    async () => {
        console.log('Leyendo el primer archivo...');
        const text = await fs.readFile('./archivo.txt', 'utf-8')
        console.log('Primer Texto: ', text);
        console.log('Hacer cosas mientras lee el archivo...');
        
        console.log('Leyendo el segundo archivo...');
        const text2 = await fs.readFile('./archivo2.txt', 'utf-8')
        console.log('Segundo texto: ', text2);
        
    }
) ()

console.log('Este deberia ir de último, pero se lee de primero');

