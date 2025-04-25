// Anonymous function
/** Uma função anonima só funciona dentro de parenteses */
(function (a, b, c) {
    return a + b + c;
})

// Function expression
/** Com isso é possível atribuir ao valor de uma var ou const o valor de uma função */
var sum = function (a, b) {
    return a + b;
}
/** var sum = function abc(a, b)... 
não consigo chamar abc(1, 2)ela não existe */

var result = sum(1, 2);
console.log(result);

var anotherSum = sum;
console.log(anotherSum(5, 9));

let x = 3;
console.log(x);

x = sum;
console.log(x(11, 16))