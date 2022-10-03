console.log("hola aca");

const numero = 1
let nombre = "NT2"

function saludar() {
    //console.log("hola");
    //para saber si es un array existe la funcion isArray
    console.log(Array.isArray([1,2])); //esto devuelve TRUE
}

//si lo que viene de una funcion NO LO VOY A MODIFICAR lo podemos guardar en una CONST
/*function saludando(nombre) {
    return "Hola de nuevo " + nombre;
}*/

//saludo = saludando("gente")

//Interpolacion
function saludando(nombre) {
    return `Hola ${nombre}` //alt 96 comillas invertidas
}

saludo = saludando("todos")

console.log(saludo);

//otra forma de escribir la función anterior
const gritar = function () {
    console.log("ey !!!");
}
//ejecutamos igual 
//gritar()

//Arrow function
//1-no necesitamos la palabra function
//2- => esto se traduce como "entonces", entre parentesis iran los parametros
//3- entonces hace esto
//4- si tenemos 1 linea sola, no hace falta poner las llaves

//ejemplo de 1 sola linea
const gritarArrow =  () => console.log("ey con arrow !!!");
gritarArrow()

//Al sacarle las llaves NO ADMITE LA PALABRA RETURN 
//en este ej retorna hola con el parametro sin llaves entonces sin la palabra return.
const saludarConArrow = (nombre) =>  `Hola ${nombre}` 
console.log(saludarConArrow('pepe')); 

// si tenemos 1 solo parametro, tambien se pueden sacar los parentesis quedando de la siguiente forma
//si tenemos 2 parametros si o  si hay que poner parentesis, tambien se deben usar si NO hay parametros.
//const saludarConArrow = nombre =>  `Hola ${nombre}` 


//----------------------------------------------------------------------------------------//
//ARRAYS
//----------------------------------------------------------------------------------------//

let miArray = ["uno", "dos"]

//AGREGO UN ELEMENTO al array
miArray.push("tres")
console.log(miArray);



//Arrays de numeros
const miArrayDeNum =  [1, 2, 5, 8, 9, 10, 15, 23, 2]
//CREAMOS OTRO ARRAY Y LO juntamos AL ARRAY ANTERIOR
const otroArray = [2,2]
const copia = [...miArrayDeNum, ...otroArray]
console.log("juntamos arrays " + copia );
/*
const copia = miArrayDeNum
copia[0] = 100
console.log("probando la copia " + copia);
console.log("el original quedo asi " + miArrayDeNum);
*/
//funcion  spred ----------------------> su uso es para "desarmar" el array, lo q hace el spred es sacar los corchetes y como que quede suelto los datos
//no hace una copia de referencia en si.
console.log('funcion spreed');
console.log(...miArrayDeNum);


//MAP  ----------------------------------------------------------------------------------------// --> NO MUTA EL ARRAY ORIGINAL Y ADEMÁS DEVUELVE OTRO ARRAY
//Map devuelve otro array, pero va mutando cada elemento, devuelve un array de la misma cantidad de elementos segun querramos nosotros
//itera cada elemento y lo modifica.
//sirve para hacer alguna transformación rapida
const resultMap = miArrayDeNum.map(elemento => elemento *2)
console.log(resultMap);

console.log(`el original ${miArrayDeNum}`);




//FIND ----------------------------------------------------------------------------------------// --> el FIND devuelve algo que encontro, si no encuentra devuelve indefined
// se debe usar si busco algo que es único - cuando lo encuentra corta y lo retorna, si es mas de 2 hay que usar filter.
const resultado = miArrayDeNum.find(elemento => elemento == 8)

    //entonces necesitamos preguntar si es indefined, podriamos hacer
    if(resultado) { //aca evalua si existe
    console.log("lo encontre");
    } 
    
    console.log(`El resultado encontrado es ${resultado}`);

            //Como usar FIND con 1 objeto ----------------------------------------------------------------------------------------// -->

            const personas = [
                {nombre:"Juan"}, {nombre:"Pedro"}, {nombre:"Jose"}
            ]

            const personaEncontrada = personas.find(persona => persona.nombre == "Pedro")

            console.log(`La persona encontrada es ${personaEncontrada.nombre}`);


//FILTER ----------------------------------------------------------------------------------------// --> NO MUTA EL ORIGINAL, CREA OTRO Y LO RETORNA
//(evalua la condicion, pero no corta como FIND, sigue y devuelve 1 ARRAY, si es uno o mas, igual esta en la estructura de un array, si no esta , devuelve un array vacio)


const resultFilter = miArrayDeNum.filter(elemento => elemento == 2)
console.log(resultFilter);


//----------------------------------------------------------------------------------------//
// COMO RECORRER UN ARRAY
//----------------------------------------------------------------------------------------//


// FOR ----------------------------------------------------------------------------------------//

/*for (let index = 0; index < miArrayDeNum.length; index++) {
    const element = array[index];
    console.log(element);
}

//FOREACH -------------------------------------------------------------------------------------// --> MUTA EL ARRAY ORIGINAL

//miArrayDeNum.forEach()  //esto funciona con callback , basicamente es como pudimos asignarle a una constante una funcion, podemos pasar una funcion como parametro
miArrayDeNum.forEach((element) => {console.log(element)})

//para mutar el original
//nos da 3 parametros, el indice es x dnd vamos y el array entero.
miArrayDeNum.forEach((elemento,indice,array) => (array[indice] = 'tal cosa' ))  --> aca directamente le asigna "tal cosa"   a todos
o
miArrayDeNum.forEach((elemento,indice,array) => (array[indice] = elemeneto * 2 )) --> aca realiza una operación para asignarlo   


//si yo recibo una función, a y b
/*
function prueba (a,b, miFuncion) {
    console.log( "imprimo la funcion prueba " + miFuncion(a,b) )//ejecuto la funcion, y le paso los 2 valores que le pasaron);
   
}

//y llamamos a prueba asi
prueba (1,2, add()) 

//definimos una funcion para usarla de callback
function add(a,b) {
    return a + b;
}
*/
//Objetos
//se usa clave valor
const miObjeto = {
    materia:"NT2",
    cuatrimestre: 2, 
    saludar: (nombre) => `Bienvenido ${nombre} a ${this.materia}` //con el this, me refiero al ambito de mi funcion, osea dentro de miObjeto, peor las func arrow no tienen ese ambito

}

const miObjeto2 = {
    materia:"NT2",
    cuatrimestre: 2, 
    saludar: function (nombre){  return `Bienvenido ${nombre} a ${this.materia}` }

}

console.log(miObjeto2.saludar("pepito"));

//Otro método de Array es el ------------ ORDENAMIENTO
const miArrayLetras = ['a', 'c', 'b', 'z','x']
const arrayNumerico = [10,5,3]


// SORT ----------------------------------------------------------------------------------------// --> DEVUELVE 1 ARRAY PERO TAMBIEN MUTA EL ORIGINAL


//lo podemos llamar directamente con el array para strings, funciona sin ningun parametro, lo imprime ordenado
//console.log(miArrayLetras.sort());

//esto funciona para strings sin ningun parametro, ordena como codigo ascci, entonces NO SIRVE PARA NUMEROS
//console.log(arrayNumerico.sort());

//debemos manejarlo nosotros, pasandole una funcion
//esta funcion espera que nosotros por cada elemento le digamos, si va ordenado antes o despues.
//le damos un resultado negativo o positivo
console.log(arrayNumerico.sort((a,b)=>a - b));


            // PARA ORDENAR STRINGS----------------------------------------------------------------------------------------//
            //console.log(personas.sort((a,b) => a.nombre(compareTo(b.nombre))));


            // PODES USAR SPREED PARA COPIAR EL ARRAY QUE TE LLEGA X PARAMERO Y NO ALTERAR EL ORIGINAL----------------------------------------------------------------------------------//
                console.log([...miArrayLetras].sort());
                console.log(miArrayLetras);


/*
AGREGAMOS ELEMENTOS A UN ARRAY ----------------------------------------------------------------------------------------//*/


//PUSH() ------->AGREGAR AL FINAL----------------------------------------------------------------------------------------
 miArrayLetras.push('l')
console.log(miArrayLetras);

//POP() -------> SACAR EL ULTIMO ELEMENTO CON POP----------------------------------------------------------------------------------------
miArrayLetras.pop()
console.log(miArrayLetras);

//SHIFT() -----> SACAR EL PRIMER ELEMENTO CON POP----------------------------------------------------------------------------------------

console.log(miArrayLetras.shift())

//UNSHIFT() -----> AGREGA UN ELEMENTO QUE SE LE PASA POR PARAMETRO AL PRINCIPIO---------------------------------------------------------------
console.log(miArrayLetras.unshift('z'));


//Buscar: * que me devuelva el indice de algo que buscamos
//        * suplantar un elemento en una posicion especifica
