//1) crear un repositorio y empezar a trabajar en los ejercicios subiendo las cambios en él.
//por cada ejercicio realizar un commit con el mensaje correspondiente.

//2) crear un metodo que asegure si un partido de futbol esta en condiciones de comenzar.

const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:true},
    {condicion:"todos los jugadores deben estar anotados",valor:false},
    {condicion:"las condiciones climaticas deben ser buenas",valor:true}
]

//Se utiliza un filter para guardarte las condiciones negativas, teniendo un array más chico que le original.
function puedeComenzar(condiciones) {
    const noPuede = condiciones.filter(elem => elem.valor == false) 
    console.log(noPuede.length);
    if (noPuede.length > 0) {
        let indice  = 1
        console.log('*** No es posible jugar el partido porque: ***');
        /*
        noPuede.forEach((element, index, array){
            console.log(`${array[index]}: ${element.condicion}`));
        }*/
        noPuede.forEach(element => {
            console.log(`${indice}) ${element.condicion}`);
            indice++;
        });
        
    }
    else {
        console.log("A jugar!!!");
    }
}

/* 
OTRA RESOLUCIÓN:
condiciones.forEach(elemento => {
    if (elemento.valor == false) {
        console.log(`El partido no puede comenzar porque no cumple la siguiente condición: ${elemento.condicion}`);
    }
})
Aca no se podría juntar las condiciones, 
*/


puedeComenzar(condiciones)

//const otroArray = condiciones.map(e=> valor?)
/*
 export  {
    condiciones
 }
 */