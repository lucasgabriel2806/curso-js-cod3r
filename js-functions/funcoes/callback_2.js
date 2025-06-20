const { Console } = require('console');
const fs = require('fs');

const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

// Possom colocar _ no err, isso significa que
// eu não vou usar aquele parametro(é uma convenção).
function exibirConteudo(err, conteudo) {

    console.log(conteudo.toString());

}

console.log('Inicio...');

// Posso omitir o {}.
fs.readFile(caminho, {}, exibirConteudo);

fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString));

// O fim será exibido antes porque não fica esperando o readFile terminar de ler o arquivo 
console.log('Fim...');

console.log('Inicio Sync...');

const conteudo = fs.readFileSync(caminho);

console.log(conteudo.toString());

console.log('Fim Sync...');