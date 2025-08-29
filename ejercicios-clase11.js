//EJERCICIO 1

let number1 = prompt("Ingrese un número: ");

let number11 = parseFloat(number1); 

if (number11 > 0){
    console.log("El número es postivo.")    
} else if(number1 < 0){
    console.log("El número es negativo.")    
} else{
    console.log("El número es cero.")
}

//EJERCICIO 2

let color = prompt("Indique un color del semaforo (rojo, amarillo o verde): ");

switch(color.toLowerCase()){
    case "rojo":
        console.log("Alto no puedes avanzar."); 
        break;
    case "amarillo": 
        console.log("Precaución, prepárate para avanzar.");
        break;  
    case "verde": 
        console.log("Avanza con seguridad."); 
        break;
    default:
        console.log("Color no reconocido, ingrese rojo, amarillo o verde.")
}

//EJERCICIO 3 

let contar = parseInt(prompt("Ingrese un número positivo: ")); 

if (contar > 0) {
  for (let i = 1; i <= contar; i++) {
    console.log(i);
  }
} else {
  console.log("Por favor, ingresa un número positivo.");
}

// EJERCICIO 4 
if (contar % 2 == 0){
    console.log("El número es par.");
} else{
    console.log("El número es impar.");
}

// EJERCICIO 5 
let inicio = parseInt(prompt("Ingresa el número inicial:"));
let fin = parseInt(prompt("Ingresa el número final:"));


for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
}

// EJERCICIO 6

let multiplicar = parseInt(prompt("Ingresa el número: "));

for (let i = 1; i < 10; i++){
    let multiplicacion = i * multiplicar; 
    console.log(multiplicacion); 
}

// EJERCICIO 7 

let numeros = prompt("Ingrese dos numero separador por un especio: \n 1. Suma \n 2. Resta \n 3. Multiplicacion \n 4. Division"); 
let [numb1, numb2] = numeros.split(" ").map(Number);

let operacion = parseInt(prompt("Ingrese el número de la operacion que desea realizar: "))

switch(operacion){
    case 1:
        let suma = numb1 + numb2;
        console.log(suma); 
        break;
    case 2: 
        let resta = numb1 - numb2;
        console.log(resta);
        break;  
    case 3: 
        let multipli = numb1 * numb2;
        console.log(multipli); 
        break;
    default:
        console.log("Ingrese una opcion correcta");
}

// EJERCICIO 8 

let positivo = parseInt(prompt("Ingresa un número entero positivo:"));

for (let i = 1; i<100; i++){
    if (i % positivo == 0){
        console.log(i)
    }
}

// EJERCICIO 9

let respuesta = parseInt(prompt("Deseas que la cuenta regresiva empiece? Si(1), No(2): ")); 

if(respuesta == 1){
    for (let i = 10; i >= 0; i--) {
     console.log(i);
    }
    console.log("¡Despegue!");
}

// EJERCICIO 10

let secreto = Math.floor(Math.random() * 10) + 1;
let adivinanza; 
let acertado = false; 

for (let inte = 1; inte <= 3; inte++){
    adivinanza = parseInt(prompt("Intento" + inte + ": Adivina el número entre 1 y 10: "));
    if (adivinanza === numeroSecreto) {
    console.log("Felicitaciones! Adivinaste el número secreto.");
    acertado = true;
    } else {
    console.log("No es correcto.");
    }
}

if (!acertado) {
  console.log("No lograste adivinar. El número secreto era: " + secreto);
}

