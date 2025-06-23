function gerarNumerosEntre(min, max) {

    /** Correção caso digite a ordem errada */
    if(min > max) {

        /** Destructuring */
        [max, min] = [min, max];
                     /** Array */

    }

    return new Promise(resolve => {

        const fator = max - min + 1;

        const aleatorio = parseInt(Math.random() * fator) + min;

        resolve(aleatorio);

    });

}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log);