const primeiroElemento = arrayOuString => arrayOuString[0];

const letraMinuscula = letra => letra.toLowerCase();

// let a = 1;

// console.log(a);

let p = new Promise(function(resolve) {

    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);

});

p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log);