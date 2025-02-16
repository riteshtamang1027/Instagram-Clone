// Data Type in JS
// --> Classification of data into different types is called data types.
// --> In js data types are classified into two types 
//  1. Primitive data type 
//  2. Non-primitive data type 


//  1. Primitive data type 
//  --> Primitive data type are those datatype which have  single value. 
// --> There are 6 primitive data type in js
// 1. Number
// 2.String
// 3.Boolean 
// 4.Null 
// 5.Undefined 
// 6.BigInt (Above 15 digit number)

// e.g. const a=10;,const b="Hello", const status=True


// 

// 2. Non-Primitive data type
// --> Those having multiple values are called Non-Primitive data type.

// e.g const student=["ram","shyam","hari"];

// -->There are three non-primitive data type 
// 1.Object (Object,Array.Function)
//  2.Array
//  3.Function


// a.Number 
const a=10.5;
const b=4.458489;
console.log(a,",", b)
console.log(typeof a);

// Method in Number (toString(),toFixed())
const c=a.toString()
console.log(typeof c);
const d= b.toFixed();
console.log(d)


// b.String 
// name is reserced key word in js
const Name="Ritesh";
const surname="Ritesh-Tamang"
console.log(Name);


// Method in string (toUpperCase(),toLowerCase(),length,charAt,slice(),split())
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.length);
console.log(Name.charAt(5),"This is charAt");
console.log(Name.slice(0,4));
console.log(surname.split("-")[1]);
console.log(surname.split("-"),"This ia a split");

// c. Boolean --> Its always returns true or false.
const isAdmin =true
console.log(isAdmin)
const n=1
const n3=30
console.log(n>n3);

//d.  UNDEFINE AND NULL
// -->When we declare the variable and not assign any value to it  is known as undefine.
// Reserved key word
var Myname;
let surname2;
console.log(Myname);
console.log(surname2);

// e. Null
// --> value is given in the variables but the value is empty so it is known as null.

var as = null;
let are = null;
console.log(as, "This is null value");
console.log(are, "This is null value");



// f.BigInt
const n2=234567890123456712345678912345678n;
console.log(n2)
console.log(typeof n2)

// Object 
// -->Collection of key values pares under the same name is called ovject
const Person={Name:"Ritesh Tamang",
age:20,
college:"trichandra",
address:"Kathmandu"}
console.log(Person);
// Method of object (Object.keys(),object.values(),Object.entries());
console.log(Object.keys(Person));
console.log(Object.values(Person)[1]);
console.log(Object.entries(Person));
console.log(Object.entries(Person)[1][1]);



// Array 
// -->Collection of similar data type under the same name is called array



// array can be further classified into two types 
// 1. Array of string 
// 2. Array of Object

// 1. Array of string 
//  Array made from collection of string 
const student =["Ram","Shyam","Hari"];
console.log(student);
const number =[1,2,3,4,5];
console.log(typeof number,number);
// Array of object 
// -->collection of object under the same name is called array of object. 

const People1 =[
    {
        Name:"Ram",
        age:"25"
    },
    {
        Name:"Ramesh",
        age:"23"
    },
    {
        Name:"Shyam",
        age:"50"
    },
    {
        Name:"Hari",
        age:"34"
    },
]
console.log(People1)
console.log(People1.length);
console.log(People1[1])
console.log(People1[1].Name.toUpperCase())
console.log(People1[1].Name.slice(0,4))

// Methods of Array (push())
// console.log(People1.push({Name:"Ritesh",age:20}));
// console.log(People1);
const newpeople ={
    Name:"Ganesh",
    age:16
}
const newpeople1=People1.push(newpeople)
console.log(newpeople1);







