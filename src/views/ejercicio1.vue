<template>
 <div>
     <b-alert show variant="primary">Ejercicio de codigo n° 1</b-alert>

    <p>Un revisor califica dos desafíos, otorgando puntos en una escala del 1 al 100 para tres categorías: claridad del problema , originalidad y dificultad .
      La calificación del desafío de Alice es a = (a[0], a[1], a[2]) , y la calificación del desafío de Bob es b = (b[0], b[1], b[2]) .
    </p>
    <p>La tarea consiste en encontrar sus puntos de comparación comparando a[0] con b[0], a[1] con b[1] y a[2] con b[2] .</p>
    <p>Si a[i] > b[i] , entonces Alice recibe 1 punto.</p>
    <p>Si a[i] < b[i] , entonces Bob recibe 1 punto..</p>
    <p>Si a[i] = b[i] , ninguna persona recibe un punto.</p>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">A:</label>
    </b-col>
    <b-col sm="7">
      <b-form-input autocomplete=off  v-model="ValoresA" id="input-small" size="sm" placeholder="Ingrese los valores separados por espacio"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="2">
      <label for="input-small">B:</label>
    </b-col>
    <b-col sm="7">
      <b-form-input  autocomplete=off v-model="ValoresB" id="input-small" size="sm" placeholder="Ingrese los valores separados por espacio"></b-form-input>
    </b-col>
  </b-row>

  <b-alert show variant="success">Resultado: {{ mensaje }}</b-alert>
  <b-button variant="outline-primary" @click="GenerarResultado" >Generar Resultado</b-button>&nbsp;
  <b-button variant="outline-danger"  @click="Borrar" >Borrar</b-button>

</div>
</template>


<script>

export default {
  data: () => ({
    ValoresA: '',
    ValoresB: '',
    arrayA: [],
    arrayB: [],
    mensaje :'',
  }),

  created() {
    this.Borrar();
  },

  methods: {
  
    GenerarResultado() {

      this.arrayA = this.ValoresA.split(' ').filter(i => i !== ' ');
      this.arrayB = this.ValoresB.split(' ').filter(i => i !== ' ');
      var totalA = 0; 
      var totalB = 0;


      if(this.arrayA.length === this.arrayB.length){

        for(let i = 0 ; i<= this.arrayA.length; i++){

          if(parseInt(this.arrayA[i]) > parseInt(this.arrayB[i])){
            totalA = totalA + 1;
          }

          if(parseInt(this.arrayA[i]) < parseInt(this.arrayB[i])){
            totalB = totalB + 1;
          }
        
        }

        this.mensaje = ''+totalA+ ' '+totalB

      }else{

        this.mensaje = 'No se pudo calcular, Ya que el tamaño de las categorias no son iguales para A y B';

      }

  

    },

    Borrar() {
      this.ValoresA = '';
      this.ValoresB = '';
      this.mensaje = '';
      this.arrayA = []; 
      this.arrayB = [];

    }
 }

}
</script>
