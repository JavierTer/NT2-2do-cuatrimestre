//1ro) hacer new del objeto Vue
new Vue({
    //Keys reservados 

    //el --> aquí va el div con el nombre del id del html / (PARTE VISUAL-todo lo que este dentro-)
    el: '#app',

    //data --> objeto contenedor de propiedades, que Vue las transforma en observables. (PARTE LÓGICA)
    data: {
        miTexto: "Hola",
        series:[
            {nombre:'serie1', estreno:2010, id:1}, 
            {nombre:'serie2', estreno:2013, id:2},
            {nombre:'serie3', estreno:2019, id:3} 
        ]
    },

    methods: {
        cambiarTexto() {
            //el this hace referencia a la instancia de vue (es el valor de la instancia y de esa variable)
            this.miTexto = "ahora lo cambie"
        },
        removerLastSerie(){
            this.series.pop()
        }
    }

})