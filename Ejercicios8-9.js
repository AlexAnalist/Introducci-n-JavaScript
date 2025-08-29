// EJERCICIO 1
let number = parseFloat(prompt("Ingresa un número: "));
let resultado = number * 2;
console.log(resultado);

// EJERCICIO 2
let number1 = prompt("Ingrese un número: ");

let number11 = parseFloat(number1); 

if (number11 > 0){
    console.log("El número es postivo.")    
} else if(number11 < 0){
    console.log("El número es negativo.")    
} else{
    console.log("El número es cero.")
}

// EJERCICIO 3
let suma = number + number1;
console.log(suma);

// EJERCICIO 4 
if (number11 % 2 == 0){
    console.log("El número es par.");
} else{
    console.log("El número es impar.");
}

// EJERCICIO 5 
let nombre = prompt("Ingresa tu nombre: "); 
let saludo = `Hola, ${nombre}! ¿Cómo estás hoy?`
console.log(saludo); 

//Clase 9 
// EJERCICIO 6
let numero1 = parseFloat(prompt("Ingresa un numero: "));  
let numero2 = parseFloat(prompt("Ingresa otro numero: "));

if (numero1 < numero2){
    console.log(`${numero2}! es mayor que ${numero1}`);
} else if(number2 < numero1){
    console.log(`${numero1}! es mayor que ${numero2}`);
} else{
    console.log("Son iguales")
}

// EJERCICIO 7 
const rangoMin = 0;
const rangoMax = 10; 

let numero3 = prompt("Ingresa un numero: ");
if (numero3 < rangoMin){
    console.log(`${numero3}! esta fuera de rango`);
} else if(numero3 > rangoMax){
    console.log(`${numero3}! esta fuera de rango`);
} else{
    console.log("Error")
}

// EJERCICIO 8
let entrada1 = prompt("Ingresa el primer valor booleano (true o false):");
let entrada2 = prompt("Ingresa el segundo valor booleano (true o false):");

let condicion1 = entrada1.toLowerCase() === "true";
let condicion2 = entrada2.toLowerCase() === "true";

console.log("AND (condicion1 && condicion2):", condicion1 && condicion2);
console.log("OR (condicion1 || condicion2):", condicion1 || condicion2);
console.log("NOT condicion1 (!condicion1):", !condicion1);
console.log("NOT condicion2 (!condicion2):", !condicion2);

// EJERCICIO 9
const nombre1 = "Alejandra"

let nombre2 = prompt("Ingresa tu nombre: "); 
if (nombre2 == nombre1){
    console.log(`${nombre2}! Bienvenido de Vuelta`)
}else{
    console.log(`${nombre2}! No te encuentras en la lista`)
}

// EJERCICIO 10
let entrada = prompt("Ingresa 3 números separados por espacios:");
let [num1, num2, num3] = entrada.split(" ").map(Number);

if (num1 >= num2 && num1 >= num3){
    console.log(`${num1} es el número mayor`);
} else if(num2 >= num1 && num2 >= num3){
    console.log(`${num2} es el número mayor`);
} else{
    console.log(`${num3} es el número mayor`);
}

// EJERCICIO 11
let edad = prompt("Ingresa tu edad: "); 

if (edad >= 18){
    console.log("Eres mayor de edad. Adelante");
} else{
    console.log("No puedes entrar. Denegado.")
}

// EJERCICIO 12

let peso1 = prompt("Ingresa tu peso en KG: "); 
let peso = parseFloat(peso1); 

let libras = peso*2.20462; 
console.log(`${peso} KG es equivalente a ${libras} libras`);

// EJERCICIO 13 

let lado1 = parseFloat(prompt("Ingresa la longitud del primer lado:"));
let lado2 = parseFloat(prompt("Ingresa la longitud del segundo lado:"));
let lado3 = parseFloat(prompt("Ingresa la longitud del tercer lado:"));

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Las longitudes deben ser mayores que cero.");
} else if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles.");
} else {
    console.log("El triángulo es escaleno.");
}

// EJERCICIO 14 

const PI = 3.14159;

let radio = parseFloat(prompt("Ingresa el radio del círculo:"));

let area = PI * Math.pow(radio, 2);       // Área = π × r²
let perimetro = 2 * PI * radio;           // Perímetro = 2 × π × r

console.log(`Para un círculo de radio ${radio}:`);
console.log(`Área: ${area.toFixed(2)}`);
console.log(`Perímetro: ${perimetro.toFixed(2)}`);

// EJERCICIO 15

let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

let dias = [
    "Lunes",     // 0
    "Martes",    // 1
    "Miércoles", // 2
    "Jueves",    // 3
    "Viernes",   // 4
    "Sábado",    // 5
    "Domingo"    // 6
];

if (numero >= 1 && numero <= 7) {
    console.log(`El día correspondiente es: ${dias[numero - 1]}`);
} else {
    console.log("Error: el número debe estar entre 1 y 7.");
}

