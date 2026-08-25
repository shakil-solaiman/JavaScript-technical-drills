// Arrow functions provide a shorter way to write functions.

// Regular function

function total(price, quantity = 12) {
  const grandTotal = price * quantity;
  return grandTotal;
}

const spend1 = total(10);
console.log("Regular Function:", spend1);



// Arrow function with a function body

const totalArrow = (price, quantity = 12) => {
  const grandTotal = price * quantity;
  return grandTotal;
};

const spend2 = totalArrow(10);
console.log("Arrow Function:", spend2);



// Arrow function with implicit return
// If the function has only one expression, return is automatic

const add = (a, b) => a + b;

const sum = add(5, 10);
console.log("Sum:", sum);



/*
Key Concepts

Arrow Function:
- A shorter syntax for writing functions using =>.

Syntax:
- (parameters) => { function body }
- (parameters) => expression

Implicit Return:
- If there is only one expression, JavaScript automatically returns it.
- Example: (a, b) => a + b

Explicit Return:
- When using curly braces {}, you must write return.

Default Parameter:
- A parameter can have a default value.
- Example: quantity = 12

Difference between Regular and Arrow Functions

Regular Function:
- Uses the function keyword.
- Has its own this value.
- Can be used as a constructor with new.

Arrow Function:
- Uses => syntax.
- Does not have its own this.
- Cannot be used as a constructor.
*/