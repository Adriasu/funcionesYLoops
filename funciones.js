// EJERCICIO 1

const side1 = parseInt(prompt("Ingrese la medida del lado 1 del rectángulo"));
const side2 = parseInt(prompt("Ingrese la medida del lado 2 del rectángulo"));

function rectangleArea(a = 5, b = 3) {
    return a * b
}
console.log(rectangleArea(side1, side2));   
console.log(rectangleArea());





