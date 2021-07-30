<template>
 <div>

  <b-alert class="p-1" show variant="primary"><h5>Patrones de Diseño</h5></b-alert>

  <h6><b>Problema 1:</b> Un cliente requiere utilizar sendgrid para envíos de email, pero otro cliente requiere enviarlos por mandril. Se quiere evitar el uso de IF, y realizar un diseño en donde podamos utilizar más servicios en caso de que un cliente requiera alguno en específico  ¿Qué patrón de diseño utilizarías y por qué?
  </h6>
  <p>Opciónes:<b>Strategy - Factory Method  - Adapter</b></p>


  <b-alert class="p-1" show variant="success"><b>Respuesta:</b> 
    <h6>Teniendo en cuenta que el objetivo en comun de los clientes es el envio de correos, lo mas adecuado es usar el patron Strategy.
    El patrón Strategy nos sugiere que de la clase primaria separemos cada algoritmos que hace de cierta forma la misma funcion y la separemos en clases (Que tecnicamente se llaman estrategias)
    Ya asi tendriamos una clase primaria que tendria un atributo que nos va a permitir identificar que tipo de algoritmo(estrategia) queremos utlizar y de esta forma 
    podriamos tener N distintas formas de enviar correo por medio de N distintos Programas. De esta manera teniendo parametrizada las estrategias se podrian escoger cual utilizar. </h6>
  </b-alert>

  <h6><b>Problema 2:</b> Explica en tus propias palabras la diferencia entre Factory Method y Abstract Factory. Y proporciona un caso de uso.</h6>

  <b-alert class="p-1" show variant="success"><b>Respuesta:</b> 
    
    <p><b>Diferencias</b><p>
    <p><b>1- </b>Abstract Factory trabaja con familias de objetos mientras que Factory Method  trabaja con un unico objeto. </p>
    <p><b>2- </b>Ambito: Factory Method es un patrón de clases mientras que Abstract Factory es un patron de objeto.</p>
    <p><b>3- </b>Abstraccion: Abstract Factory se encuentra a un nivel de abstracción mayor que Factory Method.</p>
    <p><b>4- </b>Diseño: Abstract Factory tiene diseño más flexibles que los que utilizan Factory Method, pero son también más complejos.</p>

    <h6><b>Caso de uso:</b> 
    Por ejemplo tenemos una aplicacion que se conecta a distintas base de datos, pero de antemano no conocemos que base de datos vamos a conectarnos y es solo por medio de la configuración es como podremos determinar que base de datos estaremos utilizando.
    Lo más recomendable es crear un Factory Method que nos cree un objeto que nos permita conectarnos a la base de datos, y que este objeto oculte los detalles de implementación, por otro lado, el Factory Method ocultara los detalles de implementación para 
    leer la configuración y crear el objeto adecuado según la configuración, de esta forma, todos los detalles son ocultados al cliente y este solo se preocupa por implementar la lógica.</h6>

  </b-alert>



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
