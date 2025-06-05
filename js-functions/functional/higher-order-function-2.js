// curring - Consigo passar os parametros de forma parcial
// Através de uma função você consegue 
// retornar uma outra função com parametro
function finalPrice(tax, price) {

    return function(price){

        return price * (1 + tax);

    }

}

const nycFinalPrice = finalPrice(0.0875);

console.log(finalPrice(0.0875)(25.1));
console.log(nycFinalPrice(21.7));
console.log(nycFinalPrice(107.9));