function entregarComida() {
    const ensalada = getEnsalada();
    const hamburguesa = getHamburguesa();
    getBebida()
      .then((bebida) => {
        console.log(
          `Su pedido de ${ensalada} ${hamburguesa} ${bebida} esta listo`
        );
      })
      .catch((error) => console.log(error));
  
    console.log("no sirve");
  }
  
  function getEnsalada() {
    return "🥗";
  }
  
  function getHamburguesa() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("🍔");
      }, 4000);
    });
  }
  
  //no tenes control
  function getBebida() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("🍺");
      }, 8000);
    });
  }
  
  entregarComida();
  