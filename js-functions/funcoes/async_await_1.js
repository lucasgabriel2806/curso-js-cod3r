function esperarPor(tempo = 2000) {

    return new Promise(function(resolve) {

        setTimeout(() => resolve(), tempo);

    });

};

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'));

function retornarValor() {

    return new Promise(resolve => {

        setTimeout(() => resolve(10), 5000);

    });

}

async function retornarValorRapido() {

    return 20;

}

async function executar() {

    let valor = await retornarValorRapido();

    await esperarPor(1500);

    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500);
    
    console.log(`Async/Await ${valor + 1}...`);

    await esperarPor(1500);
    
    console.log(`Async/Await ${valor + 2}...`);

    return valor + 3;

}

// Isso vai retornar uma promise, não o valor + 3
/**
const v = executar();

console.log(v);
*/

//  executar().then(console.log);

async function executarDeVerdade() {

    const valor = await executar();

    console.log(valor);

}

executarDeVerdade();