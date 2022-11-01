
<template>
  <div id="app">
  <!-- 
    Router link: nos dice a donde queremos linkear en el to: hay que poner lo que pusimos en el mapeo
    esto cnd tocas, se instancia el componente que toques (home x ej)
  -->
  <router-link to="/"> Home </router-link>
  <router-link to="product"> Producto </router-link>
   
    <!-- 
    Router VIEW: solo se pone el componente sin agregarle nada, ocupa 1 espacio.
    si nosotros tenemos una estructura de columnas, ponemos el router-view y ahi se generará el reemplazo.
  -->
  <router-view></router-view>
    
  </div>
</template>

