let numeros = [8, 13, 7, 25]; 
  //El metodo .map transforma cada elemento de la lista y crea otra array con los cambios. 
let cuadrados = numeros.map(num => num* num); 

console.log("Array original: ", numeros); 
console.log("Array de cuadrados: ", cuadrados); 


//Ejercicio 2: 
let ejemplos = [1, 9, 11, 17, 18, 2, 6]; 

console.log("Array original: ", ); 

console.log("Cargando..."); 
// se debe usar filter en vez de map, ya que con el metodo map en una condicion, transforma cada elemento. mientras que filter los selecciona. 
let numPar = ejemplos.filter(ejem => ejem %2 == 0); 

console.log("Numeros pares: ", numPar);

//Ejercicio 3:
let mayor = [5, 8, 7, 2, 13, 21]; 
console.log("La lista original: ", mayor); 

//Encontrar el primer numero que cumpla la condicion, no todos. 
let priMayor = mayor.find(numb => numb > 10); 

console.log("El primer número que cumple con la condición es: ", priMayor); 

//Ejercicio 4: 
let elementos = [56, 86, 78, 69, 47]; 
let suma = 0; 
  //Recorre cada elemento del array elementos uno por uno, en cada iteracion se le asigna el elemento actual a la variable elemento que se ve acumulando en la suma 
for (let elemento of elementos){
    suma += elemento;
}

console.log("Total de la suma de los elementos: "); 

// Ejercicio 5: 
let frutas =["manzana", "banana", "cereza"]; 
 //forEach es un de los arrats que ejecuta una funcion por cada elemento, recorre automaticamente todo los elementos del array y esto permite imprimir uno a uno. 
frutas.forEach(fruta => {
    console.log(fruta); 
}); 


// Ejercicio 6: 
let palabras = ["Hola", "Mundo", "JavaScript"]; 
console.log("Lista: ", palabras); 
  //Uso map para modificar cada elemento de la lista 
let transformacion = palabras.map(palabra => "¡" + palabra +"!")

console.log("Lista mejorada: ", transformacion);

// Ejercicio 7: 
const names = ["Ana", "Luis", "Alejandra", "Juan", "María"]; 

console.log("Lista completa: ", names); 

let namesA = names.filter(name => name.startsWith("A")); 
console.log("Lista de los nombres que empiezan por A: ", namesA); 

// Ejercicio 8: 
const nombres1 = ["Conrad", "Jeremiah", "Laura", "Ana", "Paula"];

if (nombres1.includes('Laura')){
    console.log('Laura'); 
} else{
    console.log("'Laura' no está en la lista"); 
}

// Ejercicios 9: 
const palabras1 = ["sol", "luna", "estrella"]; 
let letrastotal= 0; 
 //se suma la longitud de cada palabra
palabras1.forEach(palabra =>{
    letrastotal += palabra.length;
}); 

console.log("EL total de letras entre todas las palabras es: ",letrastotal); 

// Ejercicios 10: 
const pala = ["Me", "gusta", "aprender", "JavaScript"]; 
const fra = pala.join(" "); 

console.log(fra); 

// Ejercicio 11: 
const names1 = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']; 
const namesShort = names1.filter(name1 => name1.length < 5); 
const Mayus = namesShort.map(name1 => name1.toUpperCase()); 

const frase1 = Mayus.join(", ");
console(frase1); 

// Ejercicio 12: 
const productos = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
]; 

//Productos con precio mayor o igual a 50 
const productosSele = productos.filter(producto => producto.price >= 50); 

//Obtener los nombres de los productos
const obtNombre = productosSele.map(producto => producto.name); 

//Calcular al precio total 
let preciotot = 0; 
productosSele.forEach(producto => {preciotot += producto.price});

console.log("Productos seleccionados", obtNombre.join(', '));
console.log("Precio total", preciotot); 

//Ejercicio 13: 
const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];

let peliCorta = movies[0]; 
movies.forEach(pelicula => {
    if (pelicula.duration < peliCorta.duration){
        peliCorta = pelicula
    }
});

const peliRest = movies.filter(pelicula => pelicula !== peliCorta && pelicula.title.length > 10);

const tituloLargos = peliRest.map(pelicula => pelicula.title.toLowerCase()
);

console.log("Pelicula más corta: ", peliCorta.title); 
console.log("Titulos más largos: ", tituloLargos); 
