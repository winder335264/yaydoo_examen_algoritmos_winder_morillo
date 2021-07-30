<template>
  <div id="app">
    <div id="nav" class="p-3">
        <h5 v-show="$route.name != 'Home'">Prueba Técnica - Yaydoo Enterprise Tech - Winder Morillo</h5>
        <b-button to="/ejercicio1" variant="outline-secondary">Ejercicio 1</b-button>&nbsp;
        <b-button to="/ejercicio2" variant="outline-secondary">Ejercicio 2</b-button>&nbsp;
        <b-button to="/patrones" variant="outline-secondary">Patrón de Diseño</b-button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
