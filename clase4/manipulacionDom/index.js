//tomamos los elementos del DOM
const appTitulo = document.getElementById('titulo')
const ascendente = true

//trabajamos con el boton
const miBoton = document.getElementById('ordenar')
miBoton.addEventListener('click', cambiar)


//'le inyectamos el texto que queremos a traves de js'
appTitulo.innerHTML = '<h1>Toca el botón para ordenar!</h1>'



const arraySeries = [
    { nombre: "friends", año: 1998 },
    { nombre: "better call saul", año: 2016 },
    { nombre: "the office", año: 2002 },
    { nombre: "she Hulk", año: 2022 },
    { nombre: "sherlock Holmes", año: 2002 }
]


imprimir()



function cambiar() {
    this.ascendente = !this.ascendente
    ordenar(this.ascendente)
}

function ordenar(ascendente) {
    if (ascendente) {
        arraySeries.sort((a, b) => a.año - b.año)
    }
    else {
        arraySeries.sort((a, b) => b.año - a.año)
    }
    
    imprimir()
    console.log('click');
}

function imprimir() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ''

    for (let i = 0; i < arraySeries.length; i++) {
        console.log(`Serie: ${arraySeries[i].nombre} --- Año: ${arraySeries[i].año}`)

        //creamos 1 elemento en memoria
        let unLi = document.createElement("li")


        //escribimos dinamicamente en el DOM
        unLi.innerHTML = `Serie: ${arraySeries[i].nombre} --- Año: ${arraySeries[i].año}`

        //agregamos el elemento creado anteriormente a la lista
        lista.appendChild(unLi)

    }
    

}