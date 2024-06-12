/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    const fs = require('fs');
    const fileContent = fs.readFileSync(htmlFilePath, 'utf-8');
    const newContent = fileContent.replaceAll(textToSearch, textToReplace)
    // console.log('esto: ', fileContent);
    fs.writeFileSync('resultado.html', newContent)
}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");
