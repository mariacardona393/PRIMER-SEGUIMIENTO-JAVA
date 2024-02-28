//----------- PRIMER SEGUIMIENTO----

// TRES FUNCIONES: 
//  1- sin paramentros
//  2- un parametro
//  3- dos o mas parametros 
//---------------------------------

// 1- Sin parametros

function withouparametros(){
    console.log("Podemos evidenciar que asi seria una funcion sin parametos con -function-")
}

// 2- Un paramentro en este caso la edad 

const Edad=edad=>{
// Definimos con un let el numero de la edad que nos returnara la funcion.
let edad=20;
return edad;
}

// 3- Dos o mas parametros: en este caso seria una suma de dos o mas numeros 

function sumarNumeros(numeros) {
    // Primero definimos con un let la variable, que en este caso es 'suma' y luego creamos un for para asi hacer la respectiva suma 
    // y no se concatene.
    let suma = 0;
    for (let numero of numeros) {
      suma += numero;
    }
    return suma;
  }
  
  
  console.log(sumarNumeros(5, 10)); // Salida: 15
  console.log(sumarNumeros(2, 4, 6)); // Salida: 12
  console.log(sumarNumeros(1, 3, 5, 7, 9)); // Salida: 25
  


  //---------------------------------------------
  // 5 VARIABLES CON LET Y CONST 


  // Variables con let (variables mutables)
let numero1 = 10;
let numero2 = 20;

// Variables con const (variables inmutables)
const PI = 3.14159;
const nombre = "Juan";


// AHORA INTEGRAMOS ESAS VARIABLES CON FUNCIONES

// Función que usa las variables y muestra los resultados

function operaciones() {
    // Suma de los dos números
    const suma = numero1 + numero2;
    console.log("La suma de numero1 y numero2 es:", suma);

    // Multiplicación de los dos números
    const multiplicacion = numero1 * numero2;
    console.log("La multiplicación de numero1 y numero2 es:", multiplicacion);

    // Concatenación del nombre y el valor de PI
    const mensaje = "Hola, " + nombre + ". El valor de PI es: " + PI;
    console.log(mensaje);

    // Mostrar la lista de números
    console.log("La lista de números es:", [1, 2, 3, 4, 5]);
}

// Variable con const (variables inmutables)
const listaNumeros = [1, 2, 3, 4, 5];

// Llamada a la función para mostrar los resultados
operaciones();


    

      