// Ejercicio 1: calcular área triangulo 
function AreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const area = AreaTriangulo(15, 7);
console.log("El área del triángulo es:", area);

// Ejercicio 2: 
const cualesMayor = function(num1, num2) {

    if (num1 > num2) {
        return `${num1} es mayor que ${num2}`;
    } else if (num2 > num1) {
        return `${num2} es mayor que ${num1}`;
    } else {
        return `Ambos números son iguales: ${num1}`;
    }
};

//Uso 
console.log(cualesMayor(157, 120)); 

// Ejercicio 3: 
let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
    
    let saludoLocal = "Hola desde el scope local";
    
    console.log(saludoGlobal);  
    console.log(saludoLocal);   
    
    //puedo modificarlo desde aqui 
    saludoGlobal = "Hola global modificado desde la función";
    
}

mostrarMensaje();

// Ejercicio 4: 
function esPar(numero) {
    
    let resultado;
    
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es impar";
    }
    
    return resultado;
}


console.log(esPar(4));    
console.log(esPar(7));    
console.log(esPar(9));    
console.log(esPar(-3));   
console.log(esPar(10));   

// Ejercicio 5: 
const concatenarNombres = function(nombre, apellido) {
    return nombre + " " + apellido;
};

console.log(concatenarNombres("Juan", "Pérez"));      
console.log(concatenarNombres("María", "García"));    
console.log(concatenarNombres("Carlos", "López"));    

// Ejercicio 6: 
function convertidorMin(horas) {
    const minutos = horas * 60;
    return minutos;
}

console.log("2 horas =", convertidorMin(2), "minutos");   

// Ejercicio 7: 
let horaActual = 11; 

// Función declarada para mostrar saludo según la hora
function mostrarSaludo() {
    if (horaActual < 12) {
        console.log("Buenos días");
    } else if (horaActual < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }
}

// Caso 1: Manteniendo la hora establecida.
console.log("Hora actual:", horaActual);
mostrarSaludo(); 

// Caso 2: Cambiando la hora.
horaActual = 8;
console.log("Hora actual:", horaActual);
mostrarSaludo(); 

//Ejercicio 8: 
const convertidorFahrenheit = function(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};

// Ejemplos de uso
console.log("0°C =", convertidorFahrenheit(0), "°F");        
console.log("100°C =", convertidorFahrenheit(100), "°F");    
console.log("25°C =", convertidorFahrenheit(25), "°F");      
console.log("-10°C =", convertidorFahrenheit(-10), "°F");    
console.log("37°C =", convertidorFahrenheit(37), "°F");  

// Ejercicio 9: 
function contarHasta(numero) {
    console.log(`Contando desde 1 hasta ${numero}:`);
    
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

// Ejemplos de uso
contarHasta(23);
console.log("---");
contarHasta(45);
console.log("---");
contarHasta(10);

// Ejercicio 10: 
const calcularFactorial = function(numero) {
    // Caso 1: para cuando es cero o 1
    if (numero === 0 || numero === 1) {
        return 1;
    }
    
    //Caso2: el resto de los numeros 
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log("Factorial de 0:", calcularFactorial(0));   
console.log("Factorial de 10:", calcularFactorial(10));   
console.log("Factorial de 25:", calcularFactorial(25));   