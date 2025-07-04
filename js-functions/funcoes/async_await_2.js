function gerarNumerosEntre(min, max, numerosProibidos) {

    /** Correção caso digite a ordem errada */
    if(min > max) {

        /** Destructuring */
        [max, min] = [min, max];
                     /** Array */

    }

    return new Promise((resolve, reject) => {

        const fator = max - min + 1;

        const aleatorio = parseInt(Math.random() * fator) + min;

        if(numerosProibidos.includes(aleatorio)) {

            reject('Número repetido.')

        } else {

            resolve(aleatorio);

        }

    });

}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {

    try {

        const numeros = [];

        for(let _ of Array(qtdeNumero).fill()) {

            numeros.push(await gerarNumerosEntre(1, 60, numeros));

        }

        return numeros;

    } catch(e) {

        if(tentativas > 10) {

            throw 'Não deu certo!';

        } else {

            gerarMegaSena(qtdeNumeros, tentativas + 1);

        }

    }

}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log);

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log);