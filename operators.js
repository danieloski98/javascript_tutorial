// MATHEMATICAL OPERATORS
// ASSIGNMENT OPERATORS
// COMPARISM OPERATORS
// LOGICAL OPERATORS

let x = 10
let y = 3;

let sum = x + y;
let multiplication = x * y;
let division = x / y;
let subtraction = x - y;
let modulus = x % y;

// console.log(`SUM - ${sum}`);
// console.log(`MULTIPLICATION - ${multiplication}`);
// console.log(`DIVISION - ${division}`);
// console.log(`SUBTRACTION - ${subtraction}`);
// console.log(`MODULUS - ${modulus}`);

const stringMessage = `Sum of x and y is ${sum}`;

y %= 10;
// console.log(`y after incrementing: ${y}`);

// COMPARISON OPERATORS
let a = 10;
let b = 20;

let objectA = {
    "name": "alice"
}

let objectB = objectA;

// console.log(`Is objectA equal to objectB? ${objectA === objectB}`);
// console.log(`Is a equal to b? ${a === b}`);

// console.log(`Is a greater than b? ${a > b}`);
// console.log(`Is a less than b? ${a < b}`);
// console.log(`Is a greater than or equal to b? ${a >= b}`);
// console.log(`Is a less than or equal to b? ${a <= b}`);
// console.log(`Is a equal to b? ${a === b}`);
// console.log(`Is a not equal to b? ${a != b}`);

// LOGICAL OPERATORS
// let isTrue = true;
// let isFalse = false;

let isTrue = 10 > 5;
let isFalse = 10 < 5;

console.log(`Is isTrue and isFalse? ${isTrue && isFalse}`);
console.log(`Is isTrue or isFalse? ${isTrue || isFalse}`);
console.log(`Is isTrue not isFalse? ${!isTrue}`);

// console.log(isTrue && isFalse);
// console.log(isTrue || isFalse);
// console.log(!isTrue);