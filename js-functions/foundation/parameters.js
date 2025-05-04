function logParams(a, b, c) {
    console.log(a, b, c);
}

/** JavaScript é uma linguagem muito flexivel. */
logParams(1, 2, 3, 4, 5); // 1 2 3
logParams(1, 2, 3); // 1 2 3
logParams(1, 2); // 1 2 undefined
logParams(1); // 1 undefined undefined
logParams(); // undefined undefined undefined

function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c);
}

defaultParams(7, 8, 9); // 7 8 9
defaultParams(7, 8); // 7 8 3
defaultParams(7); // 7 2 3
defaultParams(); // 1 2 3

console.log(1);
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function logNums1(nums) {
    for(let n of nums) {
        console.log(n);
    }
}

logNums1([1, 2, 3, 4, 5, 6]);

// spread/rest
/** Significa que essa função vai conseguir receber uma quantidade variável de parametros e todos eles são armazenados numa função. */
function logNums2(...nums) {
    //console.log(Array.isArray(nums));
    console.log(nums);
    
}

logNums2(1, 2, 3, 4, 5, 6);

function sumAll(...nums) {
    let total = 0;
    for(let n of nums) {
        total += n;
    }
    return total;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));