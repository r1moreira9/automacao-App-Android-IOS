const fs = require('fs');
const path = require('path');

const envClient = process.env.CLIENT_APP || 'chapeco'; // Define um default se não for passado
const clientPath = path.resolve(__dirname, `clients/${envClient}.js`);

if (!fs.existsSync(clientPath)) {
    throw new Error(`\n=== ERRO ===\nArquivo de configuracao não encontrado para o cliente: ${envClient}\nVerifique a variavel CLIENT_APP.\n`);
}

const clientConfig = require(clientPath);

module.exports = clientConfig;
