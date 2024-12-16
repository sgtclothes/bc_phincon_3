const fruits = ["apple", 12, true, null];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits.length);

// for (let index in fruits) {
//     console.log(index);
// }

const numbers = [5, 6, 7, 8, 9, 10];

function loop(value, index, array) {
    console.log(value);
}

numbers.forEach(loop);
