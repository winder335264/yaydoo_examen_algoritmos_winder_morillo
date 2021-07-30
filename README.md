
Pasos para ejecutar el proyecto (yaydoo_examen_algoritmos_Winder_Morillo): 

Indicaciones: Necesita tener instalado Node (npm) y Vue. 

Paso 1: Abrir la terminal en el directorio del proyecto y ejecutar: 

      npm install

Paso 2: Luego de haberse instalador las dependencias se debe ejecutar el siguiente comando cuyo resultado sera una liga que se ejecutara en el navegador

      npm run serve





RESPUESTA A LA SECCION PATRONES DE DISEÑO:

RESUESTA  1:

Teniendo en cuenta que el objetivo en comun de los clientes es el envio de correos, lo mas adecuado es usar el patron Strategy.

El patrón Strategy nos sugiere que de la clase primaria separemos cada algoritmos que hace de cierta forma la misma funcion y la separemos en clases (Que tecnicamente se llaman estrategias)

Ya asi tendriamos una clase primaria que tendria un atributo que nos va a permitir identificar que tipo de algoritmo(estrategia) queremos utlizar y de esta forma 
podriamos tener N distintas formas de enviar correo por medio de N distintos Programas. De esta manera teniendo parametrizada las estrategias se podrian escoger cual utilizar. 



RESUESTA 2:

Diferencias entre Factory Method y Abstract Factory

1- Abstract Factory trabaja con familias de objetos mientras que Factory Method  trabaja con un unico objeto. 
2- Ambito: Factory Method es un patrón de clases mientras que Abstract Factory es un patron de objeto.
3- Abstraccion: Abstract Factory se encuentra a un nivel de abstracción mayor que Factory Method.
4- Diseño: Abstract Factory tiene diseño más flexibles que los que utilizan Factory Method, pero son también más complejos.


Caso de uso

Por ejemplo tenemos una aplicacion que se conecta a distintas base de datos, pero de antemano no conocemos que base de datos vamos a conectarnos y es solo por medio de la configuración es como podremos determinar que base de datos estaremos utilizando.

Lo más recomendable es crear un Factory Method que nos cree un objeto que nos permita conectarnos a la base de datos, y que este objeto oculte los detalles de implementación, por otro lado, el Factory Method ocultara los detalles de implementación para leer la configuración y crear el objeto adecuado según la configuración, de esta forma, todos los detalles son ocultados al cliente y este solo se preocupa por implementar la lógica.











