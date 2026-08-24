// JavaScript Operators Examples


// Arithmetic Operators
// +  Addition
// -  Subtraction
// *  Multiplication
// /  Division
// %  Modulus (Remainder)

// Assignment Operators
// =   Assign
// +=  Add and assign
// -=  Subtract and assign
// *=  Multiply and assign
// /=  Divide and assign

// Comparison Operators
// ===  Strict equality (value and type)
// ==   Loose equality (value only)
// >    Greater than
// <    Less than
// >=   Greater than or equal
// <=   Less than or equal

// Logical Operators
// &&  AND
// ||  OR
// !   NOT



const a = 10;
const b = 3;


// Arithmetic Examples

const sum = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;

console.log("Sum:", sum);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Remainder:", remainder);


// Complex Expression Example
// a + b - (c + f) * d / e

const c1 = 2;
const d = 4;
const e = 2;
const f = 5;

const result = a + b - ((c1 + f) * d) / e;
console.log("Complex Expression:", result);


// Assignment Operator Example

let score = 20;

score += 10; // score = score + 10
console.log("Updated Score:", score);


// Logical Operator Example

const logicalResult = !(a < b) && 10;

console.log("Logical Result:", logicalResult);