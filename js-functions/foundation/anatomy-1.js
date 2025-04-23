// Function declaration

function sayHello() {
    console.log('Hello!');
}

let x = sayHello();
// retorna undefined porquê a função não tem return
// console.log(x);

// sayHello();

function sayHelloTo(name) {
    console.log(`Hello ${name}!`);
}

sayHelloTo('Lucas');
// sayHelloTo();

function returnHi() {
    return 'Hi!';
}

/** Para recuperarmos essa string não basta chamar a função, podemos fazer o seguinte: */
let greeting = returnHi();
console.log(greeting);
console.log(returnHi());

function returnHiTo(name) {
    return `Hi ${name}!`;
}


console.log(returnHiTo('John'));