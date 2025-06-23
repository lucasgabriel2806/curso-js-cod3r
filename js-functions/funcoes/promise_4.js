function gerarNumerosEntre(min, max, tempo) {

    /** Correção caso digite a ordem errada */
    if(min > max) {

        /** Destructuring */
        [max, min] = [min, max];
                     /** Array */

    }

    return new Promise(resolve => {

        setTimeout(function(){
            
            const fator = max - min + 1;
    
            const aleatorio = parseInt(Math.random() * fator) + min;
    
            resolve(aleatorio);

        }, tempo);


    });

}

function gerarVariosNumeros() {

    return Promise.all([

        gerarNumerosEntre(1, 60, 4000),
        
        gerarNumerosEntre(1, 60, 1000),
        
        gerarNumerosEntre(1, 60, 500),
        
        gerarNumerosEntre(1, 60, 3000),
        
        gerarNumerosEntre(1, 60, 100),

        gerarNumerosEntre(1, 60, 1500),

    ]);

}

gerarVariosNumeros()
    .then(numeros => console.log(numeros));

// 4:47