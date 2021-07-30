<template>
 <div>
    <b-alert show variant="primary">Ejercicio de codigo n° 2</b-alert>
    <p>Dada una cadena de texto (string), obtener el número de veces que se repite cada palabra del texto. 
      El texto puede tener puntos y comas, puede tener palabras en mayúsculas o minúsculas. Devolver resultado en JSON
    </p>

    <b>Ejemplo:</b>
    <p>Input string = “Hola hola mundo”</p>
    <p>Output:{"hola":2,"mundo":1}</p>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-small"><b>Input string:</b></label>
    </b-col>
    <b-col sm="8">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Ingrese el String a evaluar"
        rows="4"
        max-rows="6"
      ></b-form-textarea>
    </b-col>
  </b-row>
  
  <b-row v-show="textResult != ''" class="my-1">
    <b-col sm="3">
      <label for="input-small"><b>Output:</b></label>
    </b-col>
    <b-col sm="8">
      <b-form-textarea
        id="textarea"
        v-model="textResult"
        placeholder="Resultado"
        rows="4"
        max-rows="6"
      ></b-form-textarea>
    </b-col>
  </b-row>

  <b-button variant="outline-primary" @click="GenerarResultado" >Generar Resultado</b-button>&nbsp;
  <b-button variant="outline-danger"  @click="Borrar" >Borrar</b-button>

</div>
</template>


<script>

export default {
  data: () => ({
    text: '',
    textResult: '',
    freqText: [],
  }),

  created() {
    this.Borrar();
  },

  methods: {
  
    GenerarResultado() {

      this.textResult = '';
      this.freqText = [];

      //Convertimos todos los caracteres a minusculas
      this.text = this.text.toLowerCase();

      //Reemplezamos los caracteres especiales
      this.text = this.text.replace(/["']/g, "");
      var specialChars = "“!”@#$^&%*()+=-[]\/{}|:<>?,.—"; 
      for (let i = 0; i < this.text.length; i++) 
      { 
        this.text = this.text.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
      }


      //Generamos un Array de frecuencia por palabra
      this.text.split(' ').forEach(item => this.freqText[item] = (this.freqText[item] || 0 ) + 1 );
      //Convertimos el Array en objeto y el objeto en string
      this.textResult = JSON.stringify(Object.assign({}, this.freqText));

    },

    Borrar() {
      this.text = '';
      this.textResult = '';
      this.freqText = []; 
    }
 }

}
</script>
