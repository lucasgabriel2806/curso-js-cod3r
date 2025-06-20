// somar(3)(4)(5)

function somar(n1) {

    return function(n2) {

        return function(n3) {

            return n1 + n2 + n3;

        }
        
    }

}

const resultSomar = somar(3)(4)(13);

console.log(resultSomar);

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)

function calcular(num1) {

    return function(num2) {

        return function(fn) {

            return fn(num1, num2);

        }

    }

}

function subtrair(num1, num2) {

    return num1 - num2;

}

function multiplicar(num1, num2) {

    return num1 * num2;

}

const r1 = calcular(10)(5)(subtrair);

const r2 = calcular(10)(5)(multiplicar);

console.log(r1);

console.log(r2);