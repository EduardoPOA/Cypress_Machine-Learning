const fs = require('fs');
const path = require('path');

const folder = 'downloads'; // Caminho relativo ao diretório do projeto

// Use __dirname para obter o diretório atual do script
const scriptDirectory = __dirname;
const folderPath = path.join(scriptDirectory, '..', folder);

fs.readdirSync(folderPath).forEach(file => {
  console.log(file);
});
