const vm = new Vue ({
    el:"#app",
    //data ahora lo tratamos como una función q devuelve un objeto
    data(){     
        return{
            texto:"Hola mundo!",
            personas: [],
        };
    },
    computed:{
        textoModificado(){
            //siempre depende de otras propiedades.
            console.log('computed 1...');
            return this.texto.split('').reverse().join('').toUpperCase();
        },
        segundoTexto(){
            return this.textoModificado.toLowerCase();
        },
        hayPersonas(){
            //esto retorna un booleano
            return this.personas.length > 0
        },
        humanos(){
            return this.personas.filter(persona => persona.species == 'Human')
        }
    },
    /* 
    Cnd definimos 1 funcion async hay que tener cuidado porq para arriba tiene q ir haciendo el await, async
    buscamos en internet apis que nos devuelve diferentes cosas, son publicas y podemos obtener info random.
    
    Metodo nativos de los componentes
    created() 
    es lo 1ro que se contruye, luego pasa por el mounted()
    al inicio del ciclo de vida no tenemos los elementos en el created(), en el mounted() ya si los tenemos.
        
        * Podria usarse para una página de "cargando" o un spinner
        * se usa para ir a buscar la información para poblar la vista, antes de que se muestre.
        * Cuando se termina y se resolvio bien la promesa.y sabemos que tenemos los datos ahi ya ocultamos el spinner.

    */

    async created(){
        console.log("primero pasa por el created...");

        //GUARDAMOS LOS ID QUE QUERAMOS Y LOS CONCATENAMOS EN EL FETCH
        //si se le puede armar la concatenacion con 1 array lo usamos así
        //si los tiene que tener sueltos los datos --> usamos SPRED
        const ids = [1,2,3,4,5,6,7,8,9,10]
        
        /* 
        FETCH: 
            es 1 metodo nativo donde le podemos pasar un url y nos devuelve información 
            * Se usa para consumir apis publicas.
            * lo que retorna es de tipo PROMESA QUE ADENTRO TIENE UN RESPONSE (con toda la data que trae la apio)
        */
        const resultado = await fetch(
            `https://rickandmortyapi.com/api/character/${ids}`);
            
            //a la informacion la tenemos , cuando a ese resultado llamamos a .json
            //pero es 1 promesa, recien cuando se resuelve hay que llamar al .json() y tambien devuelve una promesa SOLO CON EL DATA
            const data = await resultado.json()
        
            console.log(data);
            
            //aca relacionamos lo que nos devuelve al array nuestro.
            //hay que fijarse bien como es la estructura de lo que viene, en este caso q es 1 array de objetos 
            //nos sirve hacerlo de esta forma, sino, quizás hay que ir accediendolo con .
            this.personas = data;
        
            //ir a buscar datos (con promesa) await
        //cuando termino , ocultar el spinner
        //console.log(this.personas[0].[0].name);
    },
    mounted(){
        console.log("2do pasa por el mounted...");
    }
})