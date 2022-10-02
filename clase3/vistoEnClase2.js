async function entregarComida() {
    console.log("Empieza el proceso..");
    //estas variables se guardan promesas.
    const ensaladaPromise = getEnsalada();
    const hamburguesaPromise = getHamburguesa();
    const bebidaPromise = getBebida();
  
    try {
      // en esta linea esta creando 3 variables al mismo tiempo que las declara.
      //Acá con Promise.all() esta esperando que se resuelvan todas las promesas -> retorna todas sin importar el estado
      const [ensalada, hamburguesa, bebida] = await Promise.all([
        ensaladaPromise,
        hamburguesaPromise,
        bebidaPromise,
      ]);
      console.log(`Su pedido de ${ensalada} ${hamburguesa} ${bebida} esta listo`);
    } catch (error) {
      console.log("Hubo un problema con su pedido");
    }
  }
  
  function getEnsalada() {
    return new Promise((resolve, reject) => {
        //setTimeout() recibe 2 parametros, lo que resuelve y el tiempo
        setTimeout(() => {
        //resolve es el método que se envia en el Promise
        resolve("🥗");
      }, 2000);
    });
  }
  
  function getHamburguesa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("🍔");
      }, 3000);
    });
  }
  
  //no tenes control
  function getBebida() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("🍺");
      }, 4000);
    });
  }
  
  entregarComida();
  