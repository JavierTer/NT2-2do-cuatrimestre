/*3) dado un array de series de tv, ordenar el mismo por año de estreno ascendente. 
Los objetos deben tener nombre y estreno(año) como atributos.Plus: prepararlo para ordenar de forma descendente.

4) Con el array de series, quiero eliminar un elemento segun su titulo sin modificar el array original.

5) Con el array de series, devolver otro array formado por elementos de tipo "Nombre(estreno)". 

6) hacer un metodo que reciba un array de strings y devuelva otro pasando todo a mayuscula. 
const array = ["a", "b"]
console.log(array.map(e=>e.toLocalUpperCase())); 

7) dado el array de condiciones del ejercicio 2, devolver otro con el siguiente formato: "si el valor es true, pulgar arriba, sino pulgar abajo."
*/

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

let nuevoArray = ordenar(arraySeries, "")
console.log(nuevoArray);









function eliminarSerie(unArray, nombreSerie) {
    let arrayNuevo = [...unArray]
    elementoBuscado = arrayNuevo.find(nombre => nombre == nombreSerie)
    if(elementoBuscado){
        console.log(`Se elimino la serie ${nombreSerie}`);

    }
    else{
        console.log(`No existe una serie con el nombre ${nombreSerie}`);

    }
}

