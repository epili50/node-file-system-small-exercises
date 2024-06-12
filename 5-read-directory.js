/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 */

const fs = require('fs')

fs.readdir('./', (err, archivos) =>{
    archivos.forEach((archivo) => {
        console.log(archivo);
    });
})