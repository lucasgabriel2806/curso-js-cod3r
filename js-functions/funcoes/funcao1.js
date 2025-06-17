console.log('Teste');

// Function Declaration
function bomDia() {
    console.log('Bom dia!');
}

bomDia();

// Function Expression
// Eu trato e armazeno uma função dentro de uma variável
// Via de regra, usamos uma função anonima
const boaTarde = function () {
    console.log('Boa tarde!');
}

boaTarde();

let x = boaTarde(); // undefined (sem return)

function somar(a = 0, b = 0) {
    return a + b;
}

let resultado = somar(3, 4);

console.log(resultado);

resultado = somar(3, 5, 5, 6, 7, 8);

console.log(resultado);

resultado = somar(3); // NaN se o b não for padrão = 0

console.log(resultado);

resultado = somar();

console.log(resultado);