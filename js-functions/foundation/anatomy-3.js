// Function expression
const increment1 = function(n) {
    return n + 1;
}

// Arrow function é sempre uma função anonima
const increment2 = (n) => {
    return n + 1;
}

/** Com apenas um parametro eu posso omitir os parenteses */
const increment3 = n => {
    return n + 1;
} 

/** Com apenas uma linha eu posso omitir as chaves */
const increment4 = n => n + 1;

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(24));
console.log(increment4(199));

const sum (a, b) => a + b;
console.log(sum(3, 8))