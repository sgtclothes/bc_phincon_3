const _ = require("lodash");

function getPrimeNumbers(numbers) {
    return _.filter(numbers, isPrime);
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const numbers = _.range(1, 20);
const primes = getPrimeNumbers(numbers);
console.log(primes);
