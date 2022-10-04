console.log('Ejercicios de consulta a apis');

const aplication = new Vue({
    el: "#app",
    data() {
        return {
            texto: "Cripto ranking",
            monedas: [],
        };
    },
    async created() {
        console.log('created...');
        const limit = 10;

        const resultado = await fetch(
            `https://api.coincap.io/v2/assets?limit=${limit}`);

        const data = await resultado.json();
        //console.log(data);
        this.monedas = data.data;
        console.log(this.monedas);
    },
    methods: {
        ordenarPorNombre() {
            //el this hace referencia a la instancia de vue.
           return this.monedas.sort((a ,b) => a.name.localeCompare(b.name))
            
        },
        ordenarPorRanking() {

            return this.monedas.sort((a, b) => a.rank - b.rank)
        }
    },
    
    computed: {
        verificar() {
            this.monedas.map(e => {
                if(e.changePercent24Hr > 1) {
                e.changePercent24Hr = '⬆'
            }else {
                e.changePercent24Hr = '⬇'
            }
        })                
        }
    }
    
})

//