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
  const competidores = ['juancito', 'pepito', 'cachito', 'jorge', 'carlos', 'javier', 'veronica', 'maria', 'mariela']

  async function inicio(competidores) {
      console.log('inicio...');
      const ganadores = cambios(competidores)
      try {
        let resultado = await Promise.all(ganadores);
        resultado = determinarGanador(resultado)

      } catch (error) {
        console.log(error);

      }
  }
  
  function determinarGanador(array){
      const copia = [...array].sort((a,b)=> a.tiempo - b.tiempo);
      copia.forEach((corredor, indice) => {
          console.log('---------------------------------------------------------------------------------------------------------');
          if (indice <= 2) {
              console.log(`***** ¡¡¡ El corredor ${corredor.nombre.toUpperCase()} llego en la posición ${indice + 1} con un tiempo de ${corredor.tiempo} !!! ***** (${indice + 1})`);
          }
          else{
              console.log(`El corredor ${corredor.nombre} llego en la posición ${indice + 1} con un tiempo de ${corredor.tiempo}`);
  
          }
      })
       
  }
  
  const cambios = (competidores)=>{
      const nuevo = [...competidores]
      for (let i = 0; i < nuevo.length; i++) {
          nuevo[i] = generarCorredor(nuevo[i])
      }
     
  return nuevo
  };
  
  async function generarCorredor(nombre){
    const tiempo = generarTiempo()
    corredor = {nombre, tiempo}
    return new Promise((resolve) => {
        resolve(corredor)
    })
}
  
 
  
  function generarTiempo(){
      let min = 3000;
      let max = 10000;
  
      let x = Math.floor(Math.random()*(max-min+1)+min);
      return x
  }
  
  console.log('---------------------------');
  
  console.log(inicio(competidores));