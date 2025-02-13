// console.log("Hello World");

// const { CLSThresholds } = require("web-vitals");

//1. JAVASCRIPT
// -->JavaScript is the object oriented client side scripting language.
// -->In early days JS was used in browser for interactivity.
// -->Latter JS was used in server side also after the introduction of node.js.

//2. VARIABLES IN JS
// -->Variables are the containers to store the data
// --> In js we declare variables using var, let and const.

//  VAR
// --> it is old way of declaring variables (dont use it in modern js)
// --> It support re-declaring and re-assigning the variables
var a = 5;
//  var a=6;
console.log(a);
//  Re-declaring the variable
var b = 10;
var b = 40;
console.log(b);
// Reassigning the variable
var c = 20;
c = 70;
console.log(c);
//  LET
// -->It is recommended way of declearing variablse  in morder js
// -->it does not support re-decleartaion but support re-assigning

// -->Re-declearing the variables
// let d=90;
// let d=50;
// console.log(d);

let e = 1;
e = 9;
console.log(e);

// CONST
// --> it is recomended way of declaring variables in mordern js;
// --> it doesn't support both re-declearing and re-assigning the variables;

// re-declaring the variables
//  const f=7;
//  const f=9;
//  console.log(f)

// re-assigning the variables
//  const h=7;
//  h=90;
//  console.log(h)

//3.  UNDEFINE AND NULL
// -->When we declare the variable and not assign any value to it  is known as undefine.
// Reserved key word
var Myname;
let surname;
console.log(Myname);
console.log(surname);

// --> value is given in the variables but the value is empty so it is known as null.

var as = null;
let are = null;
console.log(as, "This is null value");
console.log(are, "This is null value");

//4. OPERATORS IN JS
// --> Operators are used to perform  logical, Mathematical and comparison operations.

// ASSIGNMENT OPERATORS (=)

//  --> It is used to assign the value to the variable.
const ritesh = 100;
let haha = "This is haha";

// COMPARISON OPERATORS
// -->

const n1 = 20;
const n2 = 70;

// greater than (>) --> it return booleans (true or false)
console.log(n1 > n2);

// Less than (<)
console.log(n1 < n2, "This is comparision operators");

// Addition operator (+)
console.log(n1 + n2, "This is addition operator");

//  Subtraction Operation  (-);
console.log(n1 - n2, "this is subtractio operator");

// Multiplication Operator
const w = n1 * n2;
console.log(w, "this is multiplication operator");

// Division operator(/)
const x = n1 / n2;
console.log(x, "This is division operator");

//  Value equal to operator (==)
const v1 = 10;
const v2 = "10";
console.log(v1 == v2);

// Type equal to operator(===)
console.log(v1 === v2);

// Value not equal to operator(!=)
console.log(v1 != v2);

// Type not equal to operator(!==)
console.log(v1 !== v2);

// Greater than or equal to operator (>=)
const rt = 7;
const re = 20;
console.log(rt >= re);

// Less than or equal to operator (<=)
console.log(rt <= re);

// Conditional operator (?,:) -->(Shor form of If else )
const criteriaAge = 20;
const studentage = 16;

console.log(
  criteriaAge < studentage
    ? "yes you are able to votting "
    : "babu timi ghar jaw"
);

// Imcroment operator (++) (it increase the value by 1)

let num = 10;
// num++;
// ++num
console.log(++num);

// Decrement  operator (--) (it decrease the value by 1)
console.log(--num);



