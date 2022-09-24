console.log('Ejercicios de consulta a apis');

const aplication = new Vue ({
    el:"#app",
    data() {
        return {
            texto:"Cripto ranking",
            monedas: [],
        };
    },
    async created() {
        console.log('created...');
        const limit = 10;
        const resultado = await fetch (
            `https://api.coincap.io/v2/assets?limit=${limit}`);
        const data = await resultado.json();
        //console.log(data);
        this.monedas = data.data;    
        console.log(this.monedas);
    },
    methods: {
        ordenarPorNombre() {
            //el this hace referencia a la instancia de vue.
            this.texto = 'probando';
        }
    
})