/*3) dado un array de series de tv, ordenar el mismo por año de estreno ascendente. 
Los objetos deben tener nombre y estreno(año) como atributos.Plus: prepararlo para ordenar de forma descendente.

4) Con el array de series, quiero eliminar un elemento segun su titulo sin modificar el array original.

5) Con el array de series, devolver otro array formado por elementos de tipo "Nombre(estreno)". 

6) hacer un metodo que reciba un array de strings y devuelva otro pasando todo a mayuscula. 
const array = ["a", "b"]
console.log(array.map(e=>e.toLocalUpperCase())); 

7) dado el array de condiciones del ejercicio 2, devolver otro con el siguiente formato: "si el valor es true, pulgar arriba, sino pulgar abajo."
*/

//import {condiciones} from "./index.js";
const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:true},
    {condicion:"todos los jugadores deben estar anotados",valor:true},
    {condicion:"las condiciones climaticas deben ser buenas",valor:false}
]


console.log(condiciones);

//Ejercicio 3

const arraySeries = [
    {nombre: "friends", año: 1998},
    {nombre: "better call saul", año: 2016},
    {nombre: "the office", año: 2002},
    {nombre: "she Hulk", año: 2022},
    {nombre: "sherlock Holmes", año: 2002}
]

function ordenar (unArray, condicion) {
let arrayNuevo = [...unArray]
    if(condicion == "ascendente"){
    arrayNuevo = arrayNuevo.sort((a,b)=> a.año - b.año)

    }
    else {
    arrayNuevo = arrayNuevo.sort((a,b)=> b.año -a.año)

    }
    return arrayNuevo;
}

let nuevoArray = ordenar(arraySeries, "ascendente")




//Ejercicio 4

//Metodo filter no modifica el array original
function eliminarSerie(unArray, nombreSerie) {
    return unArray.filter(elemento => elemento.nombre != nombreSerie)
}

const serieEliminada = eliminarSerie(arraySeries, 'friends')

console.log('Lo que devuelve la funcion eliminarSerie: ');
console.log(serieEliminada);

console.log('------------------------------------');

console.log('El array Original');
console.log(arraySeries);

console.log('------------------------------------');

// Ejercicio 5
//Map no modifica el array original


const reedefinirArray = arraySeries.map(x => 
     `${x.nombre} (${x.año})`
)

console.log('Reordeno el array');
console.log(reedefinirArray);

//Ejercicio 6 ----------------------------------------------
const pasarAMayuscula = (array)=>{
    return array.map((elemento)=>elemento.toUpperCase())
}

const arrayDeStrings = ['hola', 'chau', 'bien', 'mal']

console.log(pasarAMayuscula(arrayDeStrings))


// --------------------------------------------------------
//Ejercicio 7
//👍 
//👎