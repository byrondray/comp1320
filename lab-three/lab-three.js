// let age;
// age=60;

// console.log(age);

// const country = "Canada";

// let person = "Michael";
// person = "Jim";

// let temp = "14.5c"; 
// let tempAsNumber = parseFloat(temp);
// console.log(tempAsNumber);

// let shopPrice = "$20.50"; 
// let customerPrice = addTax(shopPrice);

// function addTax (shopPrice) {
//     let toNumber = parseFloat(shopPrice.replace("$", ""));
    
//     const tax = toNumber * 1.8;
//     const taxString = tax.toFixed(2);

//     return "$" + taxString;
// }

// console.log(customerPrice);

// console.log(["hi", "bye"].length > ["okay"].length);

// console.log("54c"[20]);


// const season = "fall";

// if (season == "summer") {
//     console.log("It's summer!");
// } else if (season == "fall") {
//     console.log("It's fall.");
// } else if (season == "winter") {
//     console.log("It is winter.")
// } else {
//     console.log("It is spring.")
// }

// const colors = ["Red", "Orange", "Green", "Blue"];

// for (color of colors) {
//     if (color.charAt(color.length - 1).includes("e")) {
//         console.log(color);
//     }
// }

// var listOfTempOrMoney = ["13c", "30f", "45f", "40c", "$30.32"];

// for (temp of listOfTempOrMoney) {
//     if (temp.charAt(temp.length -1) == "c") {
//         console.log("It is celsius"); 
//     } else if (temp.charAt(temp.length -1) == "f") {
//         console.log("It is fahrenheit");
//     } else {
//         const remove$ = temp.replace("$", ""); 
//         const turnToInt = parseFloat(remove$);
//         const addTax = turnToInt * 1.8;
//         console.log("$" + addTax);
//     }
// }

// function getGreeting() {
//     let greeting = "How are you?";
//     return greeting;
// }

// function hello(name, greeting) {
//     console.log(`Hello ${name}! ${greeting}`);
// }

// hello("Armaan", getGreeting());

// function calculateArea(length, width) {
//     if (length < 0 || width < 0) {
//         console.log("You cannot use negative numbers!");
//     } else if (typeof(length) != 'number' || typeof(width) != 'number'){
//         console.log("You must use a number");
//     } else {
//         console.log(length * width);
//     }
// }

// calculateArea(5, 3);
// calculateArea(10, 4);
// calculateArea("Hello", 10);

// function age(yourAge) {
//     return `I am ${yourAge} years old.`;
//   }
  
//   function sayHello(name) {
//     return `Hello my name is ${name}`;
//   }
  
// console.log(age(24));
// console.log(sayHello("Byron"));

// console.log(age(50));
// console.log(sayHello("Joe"));

// function age(yourAge) {
//     return `I am ${yourAge} years old.`;
//   }
  
//   console.log(age(24)); // <- ❗TODO: call the age function INSIDE the console.log 
  
//   let message = `Hello there. ${age(24)}`; // <- ❗TODO
//   console.log(message);
  
//   function hello() {
//     console.log("Hi there");
//     let myAge = age(24); // <- ❗TODO
//     console.log(myAge);
//   }
  
//   hello();
