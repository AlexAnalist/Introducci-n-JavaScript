//Ejercicio 1: While para verificar números negativos. 
let suma = 0; 
let numero = parseInt(prompt("Ingresa un numero: ")); 

while (numero >= 0){
    suma += numero; 
    numero = parseInt(prompt("Ingresa otro número: "));
}
console.log("La suma es: "+  suma); 

//Ejercicio 2: Do While para seguridad. 
let contraseña; 

do{
    contraseña = prompt("Ingresa la contraseña: "); 
}while (contraseña != "1234");

console.log("Contraseña correcta!"); 

//Ejercicio 3: Ciclo For 

let num = parseInt(prompt("Indica el numero para saber cuantos numeros hay hasta llegar a el: ")); 
let impar = 0; 

for (let i = 0; i <= num; i++){
    if (i % 2 != 0){
        impar ++;
    }
}

console.log("El total de números impares desde 0 hasta" + num + "es :"+  impar); 

//Ejercicio 4: Ciclo For-Array  
let notas = []; 
let cantidad = parseInt(prompt("Cuántas notas de estudiantes desea ingresar?")); 

for(let i=0; i < cantidad; i++){
    let nota = parseFloat(prompt(`Indica la nota del estudiante ${i+1}: `)); 
    notas.push(nota);

}

console.log("*** Notas Registradas ***"); 
for (let i= 0; i< notas.length; i++){
    console.log(`Estudiante ${i+1} = ${notas[i]}`); 
}

//Ejercicio 5: Verificar nombres guardados en un array 
let nombres = []; 
console.log("Ingrese 5 nombres: "); 

for (let i = 0; i< 5; i++){
    let nombre = prompt (`Nombre ${i + 1}:`); 
    nombres[i] = nombre; 
}

let buscado = prompt("Ingresa el nombre que deseas verificar en la lista: "); 

let encontrado = false; 

for (let i = 0; i< 5; i++){
    if (nombres[i].toLowerCase() == buscado.toLowerCase()){
        encontrado= true; 
        break; 
    }
}

if(encontrado) {
    console.log(`${buscado} está en la lista.`);
    
} else {
    console.log(`${buscado} no está en la lista.`);
}

//Ejercicio 6: 
let matriz = [
    [5, 15, 25],
    [10, 1000, 8],
    [999, 12, 1500],
    [9, 10, 1001] 
];

let sum = 0;

console.log("***Comenzando el recorrido***");


for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let numero1 = matriz[i][j];

        if (numero1 >= 10 && numero1 < 1000) {
            console.log(`El número ${numero1} en la posición [${i}][${j}] - está entre 10 y 100`);
            sum += numero1;
        } else {
            console.log(`El número ${numero1} en la posición [${i}][${j}] - no está entre 10 y 100`);
        }
    }
}

console.log("***Resultados***");
console.log("-- Matriz ---");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" | "));
}
console.log(`Suma de números ≥ 10 y < 1000: ${sum}`);

//Ejemplo 7: Sumar toda la matriz  

let matriz1 = [
    [11, 25, 35, 48, 61],
    [55, 18, 26, 37, 43],
    [2, 4, 6, 8, 1],
    [14, 39, 88, 70, 90],
    [100, 300, 600, 800, 900]
];

let suma1 = 0; 

for (let fila= 0; fila<5; fila++){
    for (let columna = 0; columna < 5; columna++){
        let numer = matriz1[fila][columna]; 
        suma1 += numer;
    }
}

console.log("+++ Resultado +++");
console.log("-- Matriz ---");
for (let i = 0; i < matriz1.length; i++) {
    console.log(matriz1[i].join(" | "));
}
console.log("Suma total: ", suma1);

//Ejercicio 8: 

let matriz2 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

function DiagonalRoja(matriz2) {
    let sumaRoja = 0; 
    let Rojos = []; 
     
    for (let i = 0; i < matriz2.length; i++){
        Rojos.push(matriz2[i][i]); 
        sumaRoja += matriz2[i][i]; 
    }

    return sumaRoja;
}


function DiagonalVerde(matriz2) {
    let sumaVerde = 0; 
    let Verdes = []; 
    let j = matriz2.length -1;
     
    for (let i = 0; i < matriz2.length; i++){
        Verdes.push(matriz2[i][j]); 
        sumaVerde += matriz2[i][j]; 
        j--;
    }
    return sumaVerde;
}

console.log("***Resultados***");
let sumaR = DiagonalRoja(matriz2);
let sumaV = DiagonalVerde(matriz2);

console.log("Suma de  la diagonal roja:", sumaR);
console.log("Suma de ladiagonal verde:", sumaV);

//Ejercicio 9: 

// Matriz de gastos de todo un mes 
let gastos = [
    [15, 20, 30, 45, 25, 60, 80],  // Semana 1
    [10, 35, 50, 20, 40, 75, 90],  // Semana 2
    [25, 15, 55, 30, 65, 35, 70],  // Semana 3
    [40, 60, 20, 45, 30, 50, 85]   // Semana 4
];

// Funcion: totales semanales
function TotalesSemanales() {
    console.log("Total de cada semana: ");
    for (let i = 0; i < gastos.length; i++) {
        let totalSemana = 0;
        for (let j = 0; j < gastos[i].length; j++) {
            totalSemana += gastos[i][j];
        }
        console.log(`Semana ${i + 1}: ${totalSemana}`);
    }
}

// Funcion para el gasto especifico 
function DiaEspecifico() {
    let semana = parseInt(prompt("¿Qué semana deseas consultar? (1-4):"));
    
    if (semana < 1 || semana > 4 || isNaN(semana)) {
        console.log("Semana no válida. Debe ser entre 1 y 4.");
        return;
    }
    
    let dia = parseInt(prompt("¿Qué día de la semana deseas consultar? (1-7):"));
    
    if (dia < 1 || dia > 7 || isNaN(dia)) {
        console.log("Día no válido. Debe ser entre 1 y 7.");
        return;
    }
    
    let SSemana = semana - 1;
    let DDia = dia - 1;
    
    // gato especifico de ese dia 
    let gasto = gastos[SSemana][DDia];
    
    console.log(`Gasto del día ${dia} de la semana ${semana}: $${gasto}`);
}

//Gasto del total del mes 
function totalMes() {
    let total = 0;
    
    for (let i = 0; i < gastos.length; i++) {
        for (let j = 0; j < gastos[i].length; j++) {
            total += gastos[i][j];
        }
    }
    
    console.log(`Total gastado en el mes: $${total}`);
}

// Función para determinar la semana con más gastos
function SemanaMax() {
    let maxGastos = 0;
    let semanaMax = 0;
    
    for (let i = 0; i < gastos.length; i++) {
        let sumaSemana = 0;
        
        for (let j = 0; j < gastos[i].length; j++) {
            sumaSemana += gastos[i][j];
        }
        
        if (sumaSemana > maxGastos) {
            maxGastos = sumaSemana;
            semanaMax = i + 1;
        }
    }
    
    console.log(`La semana con más gastos fue la semana ${semanaMax} con $${maxGastos}`);
}

//Mostrar toda la matriz de gastos de ser necesario por el usuarrio
function mostrarMatriz() {
    console.log("*** Gastos ***");
    console.log("Día\t1\t2\t3\t4\t5\t6\t7");
    console.log("---------------------------------------------------");
    
    for (let i = 0; i < gastos.length; i++) {
        let fila = `Sem ${i + 1}\t`;
        for (let j = 0; j < gastos[i].length; j++) {
            fila += gastos[i][j] + "\t";
        }
        console.log(fila);
    }
}

function mostrarMenu() {
    console.log("*** Menú ***");
    console.log("1. Mostrar totales semanales");
    console.log("2. Consultar total de un día específico");
    console.log("3. Mostrar total del mes");
    console.log("4. Mostrar semana con más gastos");
    console.log("5. Mostrar matriz de gastos");
    console.log("6. Salir");
}

function ejecutarPrograma() {
    let opcion;
    
    do {
        mostrarMenu();
        opcion = parseInt(prompt("Seleccione una opción (1-6):"));
        
        switch(opcion) {
            case 1:
                console.log("\n");
                TotalesSemanales();
                break;
                
            case 2:
                console.log("\n");
                DiaEspecifico();
                break;
                
            case 3:
                console.log("\n");
                totalMes();
                break;
                
            case 4:
                console.log("\n");
                SemanaMax();
                break;
                
            case 5:
                console.log("\n");
                mostrarMatriz();
                break;
                
            case 6:
                console.log("¡Gracias por usar Control de Gastos!");
                break;
                
            default:
                console.log("Opción no válida. Por favor, elige del 1 al 6.");
        }
        
        if (opcion !== 6) {
            console.log("\nPresiona Enter para continuar...");
        }
        
    } while (opcion !== 6);
}

console.log("Sistema de Control");
ejecutarPrograma();