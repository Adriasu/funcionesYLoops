// EJERCICIO 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}

for (let i = 83; i >= 24; i--) {
  console.log(i);
}

let uncounter = 83;
while (uncounter >= 24) {
  console.log(uncounter);
  uncounter--;
}

// EJERCICIO 2

let num = 5;

for (let i = 0; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// EJERCICIO 3

for (let i = 0; i <= 10; i++) {
    console.log(i, i**2, i**3);
}

// EJERCICIO 4

let sum = 1;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// EJERCICIO 5

for (let i = 0; i <= 100; i++) {
  if (i >= 10 && i <= 23) {
    console.log("del 10 al 23", i);
  }
  if (i >= 56 && i <= 62) {
    console.log("del 56 al 62", i);
  }
  if (i % 5 === 0 || i % 7 === 0) {
    console.log("divisibles entre 5 o 7", i);
  }
}

// EJERCICIO 6

const finalNumber = prompt("Ingrese un número");

let evenNumber = 0;
let oddNumber = 0;

for (let i = 0; i <= finalNumber; i++) {
  if (i % 2 === 0) {
    evenNumber += i;
  } else {
    oddNumber += i;
  }
}

console.log(
  `La suma de todos los números pares del 0 al ${finalNumber} es ${evenNumber}, y la suma de todos los números impares del 0 al ${finalNumber} es ${oddNumber}.`
);

console.log(evenNumber, oddNumber);

// EJERCICIO 7

for (let i = "#"; i.length <= 7; i += "#"){
    console.log(i);
    }

let print = ""
for (let i = 1; i <= 7; i++){
    console.log (print += "#");
}

// EJERCICIO 8

let character = "";
let space = 6;

for (let i = 2; i <= 14; i += 2) {
  for (let j = 0; j < space; j++) {
    character += " ";
  }
  space--;
  for (let j = 0; j < i; j++) {
    character += "#";
  }
  character += "\n";
}
space = 1;

for (let i = 12; i >= 2; i -= 2) {
  for (let j = 0; j < space; j++) {
    character += " ";
  }
  space++;
  for (let j = 0; j < i; j++) {
    character += "#";
  }
  character += "\n";
}

console.log(character);
