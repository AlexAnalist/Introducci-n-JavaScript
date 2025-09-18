// Ejercicio 1: 
let personajes = ["Link", "Zelda"]; 

console.log(personajes);

personajes.push("Mario", "Isaac", "Princesa Peach", "Sett", "Papa Loui");

console.log("Lista de personajes de videojuegos actualizada: ");

// Ejercicio 2: 
let invitados = ["Diomary", "Daniel", "Madeleyn", "Juan", "Jose", "Joseph", "Angel"]; 
let eliminado = invitados.pop(); 

console.log("Invitado que no puede venir: ", eliminado); 
console.log ("Lista actualizada: ", invitados);

// Ejercicio 3: 
let mascotas = ["Perro", "Gato", "Conejo", "Caballo", "Tortuga"]; 
// Agregar una mascota al inicio de la lista 
mascotas.unshift("Hámster"); 
// Eliminar a la mascota que fue eliminada, 
let atendida = mascotas.shift(); 

console.log("Mascota atendida: ", atendida); 
console.log("Lista actualizada: ", mascotas); 

// Ejercicio 4: 
let palabras = ["JavaScript", "es", "divertido"]; 
let frase = palabras.join(" "); 
console.log("Frase: ", frase); 

// Ejercicio 5:
let colores = ["Rojo", "Verde", "Azul", "Amarillo"]; 
//Encontrar indice de un elemento 
let indice = colores.indexOf("Azul"); 
console.log("El indice del color Azul es: ", indice); 

//Ejercicio 6: 
let numeros = [2, 5, 7, 2, 8, 7]; 
let ultPosicion = numeros.lastIndexOf(7);
console.log("La última posición del número 7 es: ", ultPosicion); 

//Ejercicio 7: 
let comidas = ["Pizza", "Hamburguesa", "Tacos", "Comida China", "Hallaca"];
//Verificar si unelemento se encuentra en la lista 
let contiene = comidas.includes("Sushi");

if(contiene){
    console.log("Si, Sushi está en la lista de comidas"); 
} else{
    console.log("No, Sushi no está en la lista de comidas"); 
}

//Ejercicio 8: 
let gato = "Los gatos son geniales";
// Extraer una parte de una frase por sus indices 
let parte = gato.slice(5, 9);
console.log("Parte extraída: ", parte);

//Ejercicio 9: 
let cadena = "      Hola, mundo!      "; 
// Eliminar espacios al inicio y final con trim()
let cadenaSinespacios = cadena.trim()

console.log("Cadeena original: '" + cadena + "'"); 
console.log("Cadena sin espacios: '" + cadenaSinespacios + "'");

//Ejercicio 10: 
let oracion = "Me gusta el invierno"; 
//Reemplaza elementos
let oracionAct = oracion.replace("invierno", "verano"); 

console.log("Oración original: ", oracion); 
console.log("Oración actualizada: ", oracionAct);

// Ejercicio 11: 

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
console.log("***Sistema de Inventario***"); 

inventario.push("Impresora"); 
console.log("Sé agrego al inventario"); 

if (inventario.includes("Tablet")){
    console.log("Tablet está en el inventario"); 
} else {
    console.log("Tablet NO está en el inventario"); 
}

let productoEli = inventario.shist(); 
console.log("Sel elimino el producto: ", productoEli); 

let inventarioAct = inventario.join(", "); 
console.log("Inventario actualizado. ")
console.log(inventarioAct); 

// Ejercicio 12: 
let frase1 = "JavaScript es un lenguaje poderoso y versátil";
console.log("Original: ", oracion); 

let palabras1 = oracion.split(" "); 
console.log(" Palabras separadas: ");
console.log(palabras); 

let palabrasCortas = []; 
let palabrasLargas = []; 

for (let palabra of palabras) {
    if (palabra.length < 5){
        palabrasCortas.push(palabra); 
    } else {
        palabrasLargas.push(palabra); 
    }
}

console.log("Palabras cortas (menos de 5 letras): ", palabrasCortas.join(", ")); 
console.log("Palabras largas (más de 5 letras): ", palabrasCortas.join(", ")); 

// Ejercicio 13: 
let colaClientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let clientesAtendidos = 0;

while (colaClientes.length > 0) {
    // Extraer el primer cliente de la cola
    let clienteActual = colaClientes.shift();
    clientesAtendidos++;
    
    //  Verificar si es cliente VIP
    if (clienteActual === "VIP") {
        console.log(` ATENCIÓN PRIORITARIA: Cliente ${clienteActual} siendo atendido inmediatamente!`);
    } else {
        console.log(` Cliente ${clienteActual} siendo atendido...`);
    }
    
    // Mostrar estado actual de la cola
    if (colaClientes.length > 0) {
        console.log(`   Clientes restantes en cola: ${colaClientes.join(", ")}`);
    } else {
        console.log("   ¡No hay más clientes en espera!");
    }
    console.log("---")};

console.log(`Total de clientes atendidos: ${clientesAtendidos}`);