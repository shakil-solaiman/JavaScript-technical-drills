// Falsy values in JavaScript
// false, 0, "", null, undefined, NaN

let age = 0;

// In an if statement, JavaScript automatically converts the value to true or false
// Since 0 is a falsy value, the else block will execute

if (age) {
  console.log("Age exists");
} else {
  console.log("Kicchu nai");
}


// typeof returns the data type of a value
// typeof null returns "object", which is a historical bug in JavaScript

console.log(typeof null);


/* 
Key concepts

Falsy values are values that JavaScript treats as false in a boolean context like: 

1. false 
2. 0 
3. "" (empty string) 
4. null
5. undefined
6. NaN

Truthy values are all other values, such as 1, "Hello", [], {}, and true.

typeof operator returns the data type of a value.

typeof null returns "object" because of a historical bug in JavaScript that has been kept for backward compatibility.
*/