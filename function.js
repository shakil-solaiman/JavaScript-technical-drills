// Functions are reusable code blocks that perform a particular task.


function total(price, quantity = 12) {
  const grandTotal = price * quantity;
  return grandTotal;
}

// Calling the function
// 10 is an argument passed to the price parameter

const spend = total(10);
const save = 200 - spend;

console.log("Spend:", spend);
console.log("Save:", save);



// Another function example

function sayHello(name) {
  console.log(`Hello ${name}`);
}



// Calling the function with an argument

sayHello("Solaiman Shakil");



/*
Key Concepts

A function is a reusable block of code that performs a specific task.

Function Declaration:
- Creates a function using the function keyword.

Parameters:
- Variables listed inside the parentheses when defining a function.
- Example: price and quantity.

Arguments:
- Actual values passed to a function when calling it.
- Example: total(10) passes 10 as an argument.

Default Parameter:
- A parameter can have a default value.
- Example: quantity = 12 is used if no second argument is provided.

return:
- Sends a value back from the function.
- After return executes, the function stops running.

Function Call:
- Executes the function.
- Example: sayHello("Solaiman Shakil").
*/