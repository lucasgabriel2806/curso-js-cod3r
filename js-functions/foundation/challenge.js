// Create a range function
// range(5) -> [1, 2, 3, 4, 5];
// range(6, 11) -> [6, 7, 8, 9, 10, 11];
// range(10, 19, 2) -> [10, 12, 14, 16, 18];
// range(6, 2) -> [6, 5, 4, 3, 2];
// range(8, -3, 4); -> [8, 4, 0];

function rangeNumber(a, b = 0, c = 0) {

    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }

}

rangeNumber(5);