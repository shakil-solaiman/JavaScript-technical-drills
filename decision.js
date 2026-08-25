// Decision-making statements in JavaScript

let age = 55;
let marks = 40;

// if...else executes one block if the condition is true, otherwise another block

if (age >= 18) {
  console.log("Voter");
} else {
  console.log("Not a voter");
}

// if...else if...else checks multiple conditions from top to bottom

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else {
  console.log("Need Improvement");
}

// switch...case compares a value with different cases
// switch(true) allows us to use conditions instead of exact values

switch (true) {
  case marks >= 80:
    console.log("A+");
    break;

  case marks >= 70:
    console.log("A");
    break;

  case marks >= 60:
    console.log("A-");
    break;

  default:
    console.log("Need Improvement");
}

// Ternary operator is a shorthand for if...else
// Syntax: condition ? trueValue : falseValue

age >= 18
  ? console.log("Voter")
  : console.log("Not Voter");

// age >= 18? console.log("Voter"): console.log("Not Voter");