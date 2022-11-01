import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/main.css'
//importamos los componentes creados
import Home from './components/Home.vue'
import Product from './components/Product.vue'

//rutas
const routes = [
  {path: "/", component: Home},
  {path: "/product", component: Product}
]

//hacemos 1 instancia del router y le pasamos en 1 objeto las rutas
const router = new VueRouter({routes})

Vue.use(VueRouter) //esto inyecta algunos útiles
//2 objetos que podremos utilizar en todo el proyecto y 2 componentes

new Vue({
  router, //aca lo agregamos (la instancia)
  render: (h) => h(App)
}).$mount('#app')
