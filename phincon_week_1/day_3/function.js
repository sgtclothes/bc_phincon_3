/**
 * Simple Calculator
 */

let sumArrowFunction = (a, b) => {
    return a + b;
};

let result = sum(2, 3);
let resultArrowFunction = sumArrowFunction(5, 10);
console.log(result);
console.log(resultArrowFunction);

function sum(a, b) {
    return a + b;
}
