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

function logNums(nums) {
    for(let n of nums) {
        console.log(n);
    }
}

logNums([1, 2, 3, 4, 5, 6]);

// spread/rest
function logNums(...nums) {
    for(let n of nums) {
        console.log(n);
    }
}

logNums([1, 2, 3, 4, 5, 6]);

// 6:52