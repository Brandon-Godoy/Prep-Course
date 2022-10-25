function imprime1aN(n){
    for( let i = 1; i <= n; i++ ){
        if( i % 2 === 0){
            console.log(i)
        } if ( i > 240){
            for( let j = 1; j < 13; j++){
                console.log(j)

            }
            return
            

        }
    }
}

//console.log(imprime1aN(300))

function matriz(n, m){
    let j = 0
    let i = 0
    while(i < n){
        while(j < m){
            console.log(i, j)
            j = j + 1
        }
        j = 0
        i = i + 1
    }
}
//console.log(matriz(2,3))


function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if( numero === 10 || numero === 5){
      return true 
    }
     return false 
  }
  //console.log(esDiezOCinco(11))


  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    if( numero === Math.floor(numero)){
        return true 
    } return false 
  }
//console.log(esEntero(10.5))


function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if( numero % 3 === 0 && numero % 5 === 0 ){
        return 'fizzbuzz'
    } else if (numero % 5 === 0){
        return 'buzz'
    } else if( numero % 3 === 0 ){
    return 'fizz'
  }}

  //console.log(fizzBuzz(6))


  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

if ( num1 > num2 && num1 > num3 && Math.sign(num1) === 1){
    return ' Número 1 es mayor y positivo'
} else if ( Math.sign(num1) === -1 || Math.sign(num2) === -1 || Math.sign(num3) === -1){
    return 'Hay negativos'
}else if ( num3 > num1 && num3 > num2){
    let nuevoValor = num3 + 1
    return nuevoValor
}else if ( num1 === 0 || num2 === 0 || num3 === 0){
    return 'Error'
} return false
    
  }

  //console.log(operadoresLogicos(15,20,0))




  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if( numero === 2){
        return true
    } else if ( numero < 2){
        return false 
    } for ( let i = 2; i < numero; i++){
        if (numero % i === 0) {
            return false
        }                  //da resto: el resultado de dividir por el numero nos da decimales
                         // no da resto: el resultado de dividir por el numero nos da otro entero. NO es primo        
    }
    return true 
    
  }
//console.log(esPrimo(20))


function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if( valor === true){
        return true
    }
        return false
    }
  
  
  //console.log(esVerdadero(false))


  function tablaDelSeis(seis){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí
    let resultado = []   
    for(let i = 0; i <= 10; i++){
       resultado.push( i * seis)
    } 
    return resultado
  }
  //console.log(tablaDelSeis(7))

  function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    if( numero.toString().length == 3){
        return true
    } return false
    
  }

 //console.log(tieneTresDigitos(1111))



 function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
    let contador = 8
    let resultado = 0
    do{
      resultado +=5
      contador -=1
    }while(contador !== 0)
    return numero + resultado
  }
  //console.log(doWhile(40))
  


  function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length -1]
  }
  //console.log(devolverUltimoElemento([1,2,40,66]))



  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    let resultado = []
    for( let i = 0; i < array.length; i++){
      resultado.push( array[i] + 1)
    } return resultado
  
  }
//console.log(incrementarPorUno([10,20,30,40]))  



function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento)
    return array 
  }
//console.log(agregarItemAlFinalDelArray([1,'br',333], 'levi'))  



function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(' ')
  }

  //console.log(dePalabrasAFrase(['Hola', 'mundo']))


  function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    for( let i = 0; i < array.length; i++){
        if( array[i] === elemento){
            return true
        } 
            return false 
        }
    }
  

  //console.log(arrayContiene(['lobo','leon','dragon'], 'lobos'))
  



  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let contador = 0
    for ( let i  = 0; i < numeros.length; i++){
        contador += numeros[i]
        
       
    }
    return contador
  }

  //console.log(agregarNumeros([10,20,30,40]))



  function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let contador = 0
    for ( let i  = 0; i < resultadosTest.length; i++){
        contador += resultadosTest[i]
        
       
    }
    return contador / resultadosTest.length

  }
 // console.log(promedioResultadosTest([7,8,9]))


  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    return Math.max(...numeros)
  }

  //console.log(numeroMasGrande([1,3,9]))


  function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    /*let contador = []
    for( let i = 0; i < arreglo.length; i++){
      if( arreglo[i] > 18){
       contador.push(arreglo[i])  }
    } return contador*/
    let contenedor = 0
    for ( let i = 0; i < arreglo.length; i++){
      if( arreglo[i] > 18){
        contenedor++ //.push(arreglo[i])
      }
    } return contenedor
  
  
  }
  //console.log(cuentoElementos([5,9,19,22,06,23]))


  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí  
    
      if ( numeroDeDia === 1 || numeroDeDia === 7){
        return 'Es fin de semana'
      }else if( numeroDeDia >= 2 && numeroDeDia >=6){
        return 'Es dia Laboral'
      }
    } 
    
  
 //console.log(numeroDeDia(1,2,3,4,5,6,7))


  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let numberAString = n.toString()
    if( numberAString[0] === '9'){
      return true
    } return false
    
  }
  //console.log(empiezaConNueve(999))



  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let meses = []
    for ( let i = 0; i < array.length; i++){
      if( array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
         meses.push(array[i])
         
         
      } if( meses.length === 3){
        return meses
      }

    } return "No se encontraron los meses pedidos" 
  }
  //console.log(mesesDelAño(['Enero','Marzo','Abril', 'Noviembre']))



  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    let contador = []
    for( let i = 0; i < array.length; i++){
      if( array[i] > 100){
        contador.push(array[i])
      }
    } return contador
  }
  //console.log(mayorACien([10,20,30,40,50,60,90,100,101,110,150,170,200]))


  function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let contador = []
    let suma = numero
    for( let i = 0; i < 10; i++){
      if( i === 5){
        continue
      } else{
         suma += 2
        contador.push(suma)}

        } return contador
    }
    
  console.log(continueStatement([8]))
  
  