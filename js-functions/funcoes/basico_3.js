// Arrow function
const felizNatal = () => console.log('Feliz Natal!!!!');

felizNatal();

const saudacao = nome => `Fala ${nome}, blz!?!`;

console.log(saudacao('Lucas'));

const somar = (...numeros) => {

    // console.log(Array.isArray(numeros));

    // console.log(typeof numeros);

    let total = 0;

    for(let n of numeros) {

        total += n;

    }   

    return total;

}

console.log(somar([1, 2, 3]));

console.log(somar([1, 2, 3, 4, 5, 6]));

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const potenciaArrow = base2 => exp2 => Math.pow(base2, exp2);

console.log(potenciaArrow(2)(8));

// this
Array.prototype.ultimo = function() {

    console.log(this[this.length - 1]);

}

Array.prototype.primeiro = function() {

    console.log(this[0]);

}

const numeros = [1, 2, 3];

numeros.ultimo();

numeros.primeiro();