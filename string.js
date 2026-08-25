

let firstName = "Shafayat";
let lastName = "Islam";

// String concatenation joins two or more strings using the + operator
// Example: "Shafayat" + " " + "Islam"

let fullName1 = firstName + " " + lastName;
console.log(fullName1);



// Template literal creates strings using backticks (` `)
// It allows variable interpolation with ${} and supports multi-line strings

let fullName2 = `${firstName} ${lastName}\nNaogaon`;
console.log(fullName2);



// Using double quotes inside a single-quoted string

let randomStr = 'I am a "student"';
let randomStr2 = "I am a \"student\" ";

console.log(randomStr);
console.log(randomStr2);



// String methods

let address = "rajshahi";

console.log(address.toUpperCase());
console.log(randomStr.includes("student"));



// String length returns the total number of characters, including spaces

console.log(randomStr.length);