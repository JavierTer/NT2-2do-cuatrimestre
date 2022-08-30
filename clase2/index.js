//1) crear un repositorio y empezar a trabajar en los ejercicios subiendo las cambios en él.
//por cada ejercicio realizar un commit con el mensaje correspondiente.

//2) crear un metodo que asegure si un partido de futbol esta en condiciones de comenzar.

const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:false},
    {condicion:"todos los jugadores deben estar anotados",valor:true},
    {condicion:"las condiciones climaticas deben ser buenas",valor:false}
]

function puedeComenzar(condiciones) {
    const noPuede = condiciones.filter(elem => elem.valor == false) 
    if (noPuede) {
        let indice  = 1
        console.log('*** No es posible jugar el partido porque: ***');
        noPuede.forEach(element => {
            
            console.log(indice + ": " + element.condicion)
            indice++;
        });
        //console.log(`No es posible jugar el partido por: ${noPuede.condicion}`);
    }
}

puedeComenzar(condiciones)