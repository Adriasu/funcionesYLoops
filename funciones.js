// // EJERCICIO 1

// const side1 = parseInt(prompt("Ingrese la medida del lado 1 del rectángulo"));
// const side2 = parseInt(prompt("Ingrese la medida del lado 2 del rectángulo"));

// function rectangleArea(a = 5, b = 3) {
//   return a * b;
// }
// console.log(rectangleArea(side1, side2));
// console.log(rectangleArea());

// // EJERCICIO 2

// function celsiusToFahrenheit(c) {
//   return (c * 9) / 5 + 32;
// }
// console.log(celsiusToFahrenheit(25));

// // EJERCICIO 3

// function randomNumber(min, max) {
//   return parseInt(Math.random() * (max - min + 1) + min);
// }
// console.log(randomNumber(5, 20));

// EJERCICIO 4

const circleRadius = parseInt(prompt("Ingresa el radio del círculo"));

function circleArea(r) {
  return Math.PI * r ** 2;
}
console.log(circleArea(circleRadius));



