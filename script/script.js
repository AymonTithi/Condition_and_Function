// Marraige Condition

/*let gender = prompt("Enter your Gender: ");
let city = prompt("Enter your living area: ");
let salary = parseInt(prompt("Enter your salary amount"));

if (gender == "Male") {
  if (city == "Dhaka") {
    if (salary >= 100000) {
      console.log("Hi there! We got you");
    } else {
      console.log("Your salary must be up to 100k");
    }
  } else {
    console.log("Opps! Your living area should be in Dhaka");
  }
} else {
  console.log("Opps! I want Male candidate");
}*/

// Grade Methode

/*let marks = parseInt(prompt("Enter your marks: "));

if (marks > 100 || marks < 0) {
  console.log("Invalide Number");
} else if (marks >= 0 && marks <= 32) {
  console.log(`You scored ${marks} which means your grade is F`);
} else if (marks >= 33 && marks <= 39) {
  console.log(`You scored ${marks} which means your grade is D`);
} else if (marks >= 40 && marks <= 49) {
  console.log(`You scored ${marks} which means your grade is C`);
} else if (marks >= 50 && marks <= 59) {
  console.log(`You scored ${marks} which means your grade is B`);
} else if (marks >= 60 && marks <= 69) {
  console.log(`You scored ${marks} which means your grade is A-`);
} else if (marks >= 70 && marks <= 79) {
  console.log(`You scored ${marks} which means your grade is A`);
} else if (marks >= 80 && marks <= 100) {
  console.log(
    `Congratulation! You scored ${marks} which means your grade is A+`);
}*/

// Age Classification

let age = parseInt(prompt("Enter your age: "));

if (age < 0) {
  console.log("Invalid");
} else if (age >= 0 && age <= 1) {
  console.log(`You age is ${age} so you can call yourself as an Infant`);
} else if (age >= 2 && age <= 3) {
  console.log(`You age is ${age} so you can call yourself as a Toddler`);
} else if (age >= 4 && age <= 5) {
  console.log(`You age is ${age} so you can call yourself as a Preschooler`);
} else if (age >= 6 && age <= 10) {
  console.log(`You age is ${age} so you can call yourself as a Child`);
} else if (age >= 11 && age <= 12) {
  console.log(`You age is ${age} so you can call yourself as a Pre-Teen`);
} else if (age >= 13 && age <= 17) {
  console.log(`You age is ${age} so you can call yourself as a Teenager`);
} else if (age >= 18 && age <= 24) {
  console.log(`You age is ${age} so you can call yourself as a Young Adult`);
} else if (age >= 25 && age <= 34) {
  console.log(`You age is ${age} so you can call yourself as an Early Adult`);
} else if (age >= 35 && age <= 44) {
  console.log(`You age is ${age} so you can call yourself as a Middle Adult`);
} else if (age >= 45 && age <= 59) {
  console.log(`You age is ${age} so you can call yourself as a Mature Adult`);
} else if (age >= 60 && age <= 74) {
  console.log(`You age is ${age} so you can call yourself as a Young Old`);
} else if (age >= 75 && age <= 84) {
  console.log(`You age is ${age} so you can call yourself as a Elderly`);
} else if (age >= 85 && age <= 99) {
  console.log(`You age is ${age} so you can call yourself as a Very Old`);
} else if (age >= 100) {
  console.log(`You age is ${age} so you can call yourself as a Centenarian`);
}

// Calculator with function

/*function add(x, y) {
  sum = x + y;
  console.log(`${x} + ${y} = ${sum}`);
}

function sub(x, y) {
  min = x - y;
  console.log(`${x} - ${y} = ${min}`);
}

function mul(x, y) {
  multiplication = x * y;
  console.log(`${x} * ${y} = ${multiplication}`);
}

function div(x, y) {
  division = x / y;
  console.log(`${x} / ${y} = ${division}`);
}

add(5, 6);
sub(11, 5);
mul(11, 5);
div(12, 2);*/
