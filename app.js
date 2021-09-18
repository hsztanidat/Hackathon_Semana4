//Ejercicio 0
//En este ejercicio la funcion va a resolver solo el primer resolve y ahi acaba por lo cual va a alertar 1


//Ejercicio 1
let delay = function(ms) {
    return new Promise = function(resolve) {
      setTimeout(()=> resolve(`Se va a ejecutar despues de ${ms}ms`),ms);
    }
  }
  
  delay(10000).then(alert)
  
  
//Ejercicio 2
//Estas lineas de codigo van a funcionar de la misma manera ya que en el primer parametro es el handler del resolve y en segundo es el parametro de error handler
  
  
//ejercicio 3
const url = 'https://www.boredapi.com/api/activity/'
  
const loadJson = async function(url) {
    const res = await fetch(url)
    if (res.status == 200) {
      console.log()
      console.log(await res.json())
    } else {
      throw new Error(res.status)
    }
  }
  
  loadJson(url)
  
  
//Ejercicio 5
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000)); return 10;
    }
  function f() {
      wait().then(console.log)
    }
  
  
//Ejercicio 6
//El .catch se va a activar ya que el .catch tambien se activa con un error