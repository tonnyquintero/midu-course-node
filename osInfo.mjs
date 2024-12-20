import { platform, version, arch, cpus, freemem, totalmem, uptime } from 'node:os';

console.log('Información del sistema operativo:');

console.log('Nombre del sistema operativo' ,platform());
console.log('Versión del sistema operativo' ,version());
console.log('Arquitectura del sistema operativo' ,arch());
console.log('Información de la CPU: ', cpus());
console.log('Memoria libre: ' ,freemem() / 1024 / 1024 / 1024, 'GB');
console.log('Memoria total: ' ,totalmem() / 1024 / 1024 / 1024, 'GB');
console.log('uptime: ', uptime() / 60 / 60, 'horas'); 


 

