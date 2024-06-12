/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */

const fs = require('fs');

const fileContent = fs.readFile ('./test.txt', 'utf-8', (err, data) =>{
    if (err){
        console.log('Ocurrio un erro');
        return;
    }else{
        console.log(data);
    }
})


