/**
 * 3.1) Generar una aplicacion donde podamos poner a correr a 3 competidores(darles un nombre) y calcular como queda el podio de competicion.
    La accion de correr de cada uno tendra que tardar un tiempo aleatorio entre 3 y 10 segundos.
    Como no podemos saber cuanto tardará cada uno, tendremos que hacer uso de Promesas y manejarlas para informar el podio.
    Modificar la aplicacion para una maraton de 20 personas.
    
    Nota: no se olviden de generar un commit en sus repositorio por cada ejercicio que finalizan.

 */

 /**
 * App de competición
 */
async function competicion(arrayDeNombres) {
    console.log('Comienza la competencia');
    
    const todosLosCompetidores = generarCompetidores(arrayDeNombres)
    //const losCompetidoresDelPodio = await Promise.race(todosLosCompetidores);
    
    const podio = generarPodio(todosLosCompetidores)

    //console.log(podio[0], podio[1], podio[2]);
} 
   



async function generarPodio(competidores) {
    let todos = [...competidores]
    const ganadores = [];
    //console.log(competidores);


    for (let i = 0; i < 3; i++) {
        const element = await Promise.race(todos);
        console.log(`Aca todos son ${todos.length}`);
        console.log(`encontre a ${element}`);
        ganadores.push(element)
        let n = todos.indexOf(element)
        console.log(n);
        console.log(`los ganadores son: ${ganadores}`);
        console.log(`ahora todos son ${todos.length}`);

    }
    return ganadores
}
function saludar(nombre){
    console.log(`Felicitaciones por ganar ${nombre}`);
}

function generarTiempo(){
    let min = 3000;
    let max = 10000;

    let x = Math.floor(Math.random()*(max-min+1)+min);
    console.log(`El tiempo generado es ${x}`);
    return x
};

async function generarCorredor(nombre) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(nombre);
      }, generarTiempo());
    });
};

function generarCompetidores(arrayDeNombres){
    //map genera uno nuevo
    let competidores = [...arrayDeNombres]
    competidores = competidores.map(elemento => 
        elemento = generarCorredor(elemento)
        );
     
//    console.log(`Aca construyo los ${competidores}`);
    return competidores;   
}     

       

competicion(['juancito', 'pepito', 'cachito', 'jorge', 'carlos', 'javier', 'veronica', 'maria', 'mariela'])